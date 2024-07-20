import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getAllPremiumAdv: any = createAsyncThunk('/', async () => {
  try {
    const response = await axios.get<any>('/');
    console.log('response.data en getAllPremiumAdv: ', response.data);
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Error en la solicitud de inicio de sesión');
  }
});
