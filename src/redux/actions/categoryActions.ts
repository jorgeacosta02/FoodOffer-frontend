import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// console.log('por entrer en getCategories')
export const getCategories: any = createAsyncThunk(
  'GetCategories', 
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<any>(`/category/getCategories?type=2`);
      const data = response.data;
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);