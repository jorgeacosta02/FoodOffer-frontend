import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getAllPremiumAdv = createAsyncThunk(
  'premiumAdv/getAllPremiumAdvs', 
  async (_, thunkAPI) => {
  try {
    const response = await axios.get<any>('/url del back');
    console.log('response.data en getAllPremiumAdv: ', response.data);
    const data = response.data;
    return data;
  } catch (error:any) {
    thunkAPI.rejectWithValue(error.message);
  }
});
