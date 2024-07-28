import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


console.log('en premiumAdvActions')

export const getAllPremiumAdv: any = createAsyncThunk(
  'GetAdvertisings', 
  async (_, thunkAPI) => {
    try {
      console.log('en en try');

      // Definir el cuerpo de la solicitud
      const requestBody = {
        "attributes": [],
        "category": 0
      };

      // Realizar la solicitud POST con el cuerpo JSON
      const response = await axios.post<any>('/GetAdvertisings', requestBody);

      console.log('response.data en getAllPremiumAdv: ', response.data);
      const data = response.data;
      return data;
    } catch (error: any) {
      console.log('en catch');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
