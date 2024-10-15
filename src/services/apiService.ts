import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your API URL

export const apiService = {
  get: (endpoint: string) => axios.get(`${API_BASE_URL}${endpoint}`),
  post: (endpoint: string, data: any) => axios.post(`${API_BASE_URL}${endpoint}`, data),
  // Add more API methods as needed
};