import axios from 'axios';
import { LoginInterface } from '../interfaces';
import { api } from './api';

const userApi = axios.create({
  baseURL: `${api.baseUrl}${api.user}`,
});

export const loginApi = async (data: LoginInterface) => {
  try {
    const response = await userApi.post(`/login`, data);
    console.log(response);
  } catch (error) {
    console.log('Something was wrong');
  }
};
