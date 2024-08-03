import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getDetail: any = createAsyncThunk(
  'GetDetail', 
  async (offerId: string, thunkAPI) => {
    try {
      const response = await axios.get<any>(`/GetAdvertising?advId=${offerId}`);
      const data = response.data;
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
