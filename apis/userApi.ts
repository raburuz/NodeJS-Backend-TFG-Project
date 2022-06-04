import axios from 'axios';
import { LoginInterface } from '../interfaces';
import { api } from './api';

const userApi = axios.create({
  baseURL: `${api.baseUrl}${api.user}`,
});

export const loginApi = async (userData: LoginInterface) => {
  try {
    const response = await userApi.post(`/login`, userData);
    const { data } = response;
    return data;
  } catch (error: any) {
    return {
      error: true,
    };
  }
};
