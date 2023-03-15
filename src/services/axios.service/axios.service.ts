import axios from 'axios';
import baseUrl from '../../constants/urls';

const axiosService = axios.create({ baseURL: baseUrl });

axiosService.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token as string}`;
  return config;
});

export { axiosService };
