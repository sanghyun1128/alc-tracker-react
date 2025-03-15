import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

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
  (error: AxiosError) => {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    // TODO: Show alert modal or something else
    return Promise.reject(error);
  },
);
export default instance;
