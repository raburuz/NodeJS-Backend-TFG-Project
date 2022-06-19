import axios from 'axios';
import { LoginInterface, SettingsUserInterface } from '../interfaces';
import { api } from './api';
import Cookies from 'js-cookie';

const userApi = axios.create({
  baseURL: `${api.baseUrl}${api.user}`,
});

const tokenApi = axios.create({
  baseURL: `${api.baseUrl}${api.token}`,
});

const uploadApi = axios.create({
  baseURL: `${api.baseUrlCloudinary}`,
});

export const loginApi = async (userData: LoginInterface) => {
 
  try {
    const response = await userApi.post(`/login`, userData);
    const { data } = response;
    console.log(data);
    return data;
  } catch (error: any) {
    return {
      error: true,
    };
  }
};

export const uploadImg = async (file:any) => {
 const formData =  new FormData();
 
 formData.append('upload_preset','next-aplication');
 formData.append('file',file);

console.log(formData);
  try {
    const response = await uploadApi.post('',formData);
 
    if( response.status != 200  )  return 

    return response.data;
  } catch (error: any) {
    return {
      error: true,
    };
  }
};

export const updateApi = async (userData: SettingsUserInterface,id: string ) => {
  const cookie = Cookies.get('x_token') ?? '';
  
  console.log(userData);
  
    try {
      const response = await userApi.put(`/${id}`, userData,{
        headers:{
          'x_token': cookie,
  
        }
      });
    
      const { data } = response;
      return data;
    } catch (error: any) {
   
      return {
        error: error,
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
    console.log(userData)
  const response =   await userApi.post(`/register`, userData);
    const {data} = response;
  
  return data;
  } catch (error: any) {
    console.log(error);
    return {
      error: true,
    };
  }
};
