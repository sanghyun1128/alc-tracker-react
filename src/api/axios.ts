import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

import { requests } from './request';

const instance: AxiosInstance = axios.create({
  baseURL: 'http://192.168.0.5:4000/',
  // baseURL: 'http://localhost:4000/',
  // timeout: 15000,
  withCredentials: true,
});

// 요청 인터셉터 추가하기
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      instance.defaults.headers.common['Authorization'] =
        `Bearer ${accessToken}`;
    }

    return config;
  },
  (error: AxiosError) => {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  },
);

// 응답 인터셉터 추가하기
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data.accessToken) {
      const accessToken = response.data.accessToken;

      localStorage.setItem('accessToken', accessToken);
    }

    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as any;

    console.log(error);

    const errorData = error.response?.data as { message: string };

    if (errorData?.message === 'Invalid token') {
      originalRequest._retry = true;
      try {
        const response = await requests.getAccessToken();
        const newAccessToken = response.data.accessToken;

        localStorage.setItem('accessToken', newAccessToken);
        instance.defaults.headers.common['Authorization'] =
          `Bearer ${newAccessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return instance(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);
export default instance;
