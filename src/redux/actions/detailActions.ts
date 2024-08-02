// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';


// console.log('en detailActions')

// export const getDetail: any = createAsyncThunk(
//   'GetDetail', 
//   async (_, thunkAPI) => {
//     try {
//       console.log('en en try');

//       // Definir el cuerpo de la solicitud
//       // const requestBody = {
//       //   "attributes": [],
//       //   "category": 0
//       // };

//       // Realizar la solicitud POST con el cuerpo JSON
//       const response = await axios.get<any>('/GetAdvertising/advId=24');

//       console.log('response.data en getDetail: ', response.data);
//       const data = response.data;
//       return data;
//     } catch (error: any) {
//       console.log('en catch');
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );



// redux/actions/detailActions.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getDetail = createAsyncThunk(
  'GetDetail', 
  async (offerId: string, thunkAPI) => {
    try {
      const response = await axios.get<any>(`/GetAdvertising/advId=${offerId}`);
      const data = response.data;
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
