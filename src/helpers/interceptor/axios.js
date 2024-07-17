import axios from 'axios';
import {getValueByKey} from '../utils.js';
// import {RESPONSE_ERROR_MESSAGE} from '../../constants/index.js';
import apiService from '../../services/apiService.js';

// https://axios-http.com/docs/req_config
const DEF_CONFIG = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const ERROR_CODE = 'NG';
const api = axios.create(DEF_CONFIG);

let isRefreshing = false;
let refreshSubscribers = [];
const onRefreshed = (accessToken) => refreshSubscribers.map(callback => callback(accessToken));
const addRefreshSubscriber = (callback) => refreshSubscribers.push(callback);

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken') ?? '';
  if (config.headers && accessToken) {
    console.log('accessToken ==>', accessToken);
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
}, (error) => {
  console.error('Api Request Error => ', error);
  return Promise.reject(error);
});

api.interceptors.response.use((response) => {
  if (ERROR_CODE !== response.data?.responseCode) {
    return response;
  }

  const message = response.data?.message;
  const originalRequest = response.config;
  const searchParams = new URLSearchParams(originalRequest.url);
  if ('TokenExpired' === message) {
    if (isRefreshing) {
      return new Promise(resolve => {
        addRefreshSubscriber(accessToken => {
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          resolve(api(originalRequest));
        });
      });
    }

    originalRequest._retry = true;
    isRefreshing = true;
    return apiService.refreshAccessToken(searchParams.get('loginId'), ({data}) => {
      const accessToken = data.data?.accessToken ?? '';
      localStorage.setItem('accessToken', accessToken);

      onRefreshed(data.accessToken);
      refreshSubscribers = [];
      return Promise.resolve(api(originalRequest));
    }, () => {
      isRefreshing = false;
    })
  }

  alert(getValueByKey(RESPONSE_ERROR_MESSAGE, message, '알수 없는 오류가 발생했습니다.'));
  return Promise.reject(response);
}, async (error) => {
  if (error.response && error.response.status) {
    switch (error.response.status) {
      case 400: {
        const errors = error.response.data?.error?.errors || [];
        if (errors.length > 0) {
          alert(errors[0].message);
        }
        break;
      }
      case 401:
        console.debug('response: 401');
        window.location = '/';
        break;
      case 403:
        break;
      case 500: {
        const errorMessage = error.response.data?.error?.message ||
          '데이터 처리 중 오류가 발생했습니다';
        alert(errorMessage);
        break;
      }
    }
  }
  return Promise.reject(error.response.data);
});

export default api;
