import axios from 'axios';
import { LoginInterface } from '../interfaces';
import { api } from './api';
import Cookies from 'js-cookie';

const userApi = axios.create({
  baseURL: `${api.baseUrl}${api.user}`,
});

const tokenApi = axios.create({
  baseURL: `${api.baseUrl}${api.token}`,
});

export const loginApi = async (userData: LoginInterface) => {
  console.log(userData);
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

export const revalidateToken = async () => {
  const x_token = Cookies.get('x_token') ?? null;
  const response = await tokenApi.post('/revalidate', { x_token });
  const { data } = response;
  return data;
};

export const registerApi = async (userData: LoginInterface) => {
  try {
    await userApi.post(`/register`, userData);
    return {
      error: false,
    };
  } catch (error: any) {
    console.log(error);
    return {
      error: true,
    };
  }
};
