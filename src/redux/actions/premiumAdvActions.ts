import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

console.log('en premiumAdvActions')

export const getAllPremiumAdv: any = createAsyncThunk(
  'premiumAdv/getAllPremiumAdvs', 
  async (_, thunkAPI) => {
  try {
    console.log('en en try')
    const response = await axios.get<any>('/premiumAdv');
    console.log('response.data en getAllPremiumAdv: ', response.data);
    const data = response.data;
    return data;
  } catch (error: any) {
    console.log('en catch')
    return thunkAPI.rejectWithValue(error.message);
  }
});
