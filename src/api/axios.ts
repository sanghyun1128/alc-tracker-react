import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestHeaders,
  AxiosResponse,
  HeadersDefaults,
  InternalAxiosRequestConfig as BaseInternalAxiosRequestConfig,
} from 'axios';

import { requests } from './request';

interface InternalAxiosRequestConfig extends BaseInternalAxiosRequestConfig {
  _retry?: boolean;
}

const instance: AxiosInstance = axios.create({
  baseURL: 'https://localhost:4000/',
  // timeout: 15000,
  withCredentials: true,
});

const getAccessTokenFromLocalStorage = () => {
  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
    throw new Error('Access token not found in local storage');
  }

  return accessToken;
};

const setAccessTokenToHeader = (
  accessToken: string,
  headers: HeadersDefaults | AxiosRequestHeaders,
) => {
  headers.common['Authorization'] = `Bearer ${accessToken}`;
};

/**
 * Axios request interceptor - affects before the request is sent.
 */
instance.interceptors.request.use(
  // Before the request is sent
  (config: InternalAxiosRequestConfig) => {
    try {
      // 1. Get accessToken from localStorage
      const accessToken = getAccessTokenFromLocalStorage();
      // 2. Set the accessToken to the Authorization header
      setAccessTokenToHeader(accessToken, instance.defaults.headers);
    } catch (error) {
      //TODO: Handle the error
      console.error('Error setting access token to header:', error);
    }
    return config;
  },

  // When the request fails
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

/**
 * Axios response interceptor - affects after the response is received.
 */
instance.interceptors.response.use(
  // 2xx code response
  (response: AxiosResponse) => {
    // 1. Check if the response has a new accessToken
    if (response.data.accessToken) {
      localStorage.setItem('accessToken', response.data.accessToken);
    }

    return response;
  },

  // 4xx, 5xx code response
  async (error: AxiosError) => {
    // 1. Save the original request
    const { config, response } = error;
    const originalRequest = config as InternalAxiosRequestConfig;

    const {
      message: errorMessage,
      error: errorType,
      statusCode: errorStatusCode,
    } = response?.data as {
      message: string;
      error: string;
      statusCode: number;
    };

    // 2. Check error is token expired
    if (errorMessage === 'Invalid token' && !originalRequest._retry) {
      // 2-1. Set the _retry flag to true
      originalRequest._retry = true;
      try {
        // 2-2. Get new accessToken
        const response = await requests.getAccessToken();
        const newAccessToken = response.data.accessToken;

        // 2-3. Set the new accessToken to the localStorage and header
        localStorage.setItem('accessToken', newAccessToken);
        setAccessTokenToHeader(newAccessToken, instance.defaults.headers);
        setAccessTokenToHeader(newAccessToken, originalRequest.headers);

        // 2-4. Retry the original request with the new accessToken
        return instance(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);
export default instance;
