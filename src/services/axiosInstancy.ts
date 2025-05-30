import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});
let isRefreshing = false;

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (!isRefreshing) {
        isRefreshing = true;
        try {
          await api.post('/auth/refresh');
          isRefreshing = false;
          console.log("token refreshed")
          return api(originalRequest);  
        } catch (refreshError) {
          isRefreshing = false;
          console.error('Refresh token inválido');
          window.location.href = '/';
        }
      }
    }

    return Promise.reject(error);
  }
);
