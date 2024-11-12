import axios from 'axios';
import { toast } from 'react-toastify';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      toast.error(error.response.data.message || 'An error occurred');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
