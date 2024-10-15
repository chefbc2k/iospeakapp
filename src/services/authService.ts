import { apiService } from './apiService';

export const authService = {
  login: (credentials: { email: string; password: string }) => {
    return apiService.post('/login', credentials);
  },
  register: (userData: { email: string; password: string; name: string }) => {
    return apiService.post('/register', userData);
  },
  // Add more authentication-related functions
};