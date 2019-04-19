import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rdg-omnistack-backend.herokuapp.com',
});

export default api;