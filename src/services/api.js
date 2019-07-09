import axios from 'axios';

const api = axios.create({
  baseURL: 'https://admin-react-api/values',
});

export default api;
