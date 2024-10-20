import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// console.log('por entrer en getCategories')
export const getAttributes: any = createAsyncThunk(
  'GetAttributes', 
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<any>(`/category/getAttibutes?type=1`);
      const data = response.data;
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);