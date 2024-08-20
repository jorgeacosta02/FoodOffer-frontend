import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUserDataFromDB } from '../../Interfaces/userInterfaces';


export const loginUser: any = createAsyncThunk('/login', async (credentials: { email: string; password: string }) => {
  try {
    const response = await axios.post<IUserDataFromDB, any>('user/login', credentials);
    console.log('response en login: ', response.data);
    const data = response.data;
    localStorage.setItem('accessLogin', JSON.stringify(data));
    return data;
  } catch (error) {
    throw new Error('Error en la solicitud de inicio de sesión');
  }
});
