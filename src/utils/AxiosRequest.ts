import { Helper } from './Helper';
import axios from 'axios';
import { TokenServices } from './TokenServices';

const TIMEOUT_REQUEST = 18000;
const instance = axios.create({
  baseURL: Helper.env('REACT_APP_API_URL'),
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: TIMEOUT_REQUEST
});

instance.interceptors.request.use((config: any) => {
  const token = TokenServices.getDataStorage('accessToken');
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token
  }

  return config;
}, (error) => {
  return Promise.reject(error)
})

instance.interceptors.response.use((res) => {
  return res;
}, async (error) => {
  const originalConfig = error.config;
  if (error.response) {
    if (error.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true
    }

  }
})

export default instance;