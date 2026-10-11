import axios from 'axios';

// Override with REACT_APP_API_URL in client/.env when the API is not on localhost:5000
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
});

export const getErrorMessage = (error) =>
  error?.response?.data?.message ||
  (error?.request ? 'Cannot reach the server. Is the API running?' : error?.message) ||
  'Something went wrong';

export default api;
