import axios from 'axios';
import baseUrl from '../../constants/urls';

const axiosService = axios.create({
  baseURL: baseUrl,
});

axiosService.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  config.headers.Authorization = `Bearer ${token as string}`;

  return config;
}, (error) => {
  if (error.response) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
    return;
  }
  if (error.request) {
    console.log(error.request);
  } else {
    console.log('Error', error.message);
  }
  console.log(error.config);
});

export { axiosService };
