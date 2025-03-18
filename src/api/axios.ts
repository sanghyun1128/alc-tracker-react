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
      // 1-1. If accessToken is not found, throw an error
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
    const originalRequest = error.config as InternalAxiosRequestConfig;

    const {
      message: errorMessage,
      error: errorType,
      statusCode: errorStatusCode,
    } = error.response?.data as {
      message: string;
      error: string;
      statusCode: number;
    };

    if (errorMessage === 'Invalid token') {
      originalRequest._retry = true;
      try {
        const response = await requests.getAccessToken();
        const newAccessToken = response.data.accessToken;

        localStorage.setItem('accessToken', newAccessToken);
        setAccessTokenToHeader(newAccessToken, instance.defaults.headers);
        setAccessTokenToHeader(newAccessToken, originalRequest.headers);

        return instance(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);
export default instance;
