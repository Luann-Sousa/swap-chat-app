import axios from 'axios';

export const apiURL = axios.create({
  baseURL: 'http://192.168.3.5:3333',
});
