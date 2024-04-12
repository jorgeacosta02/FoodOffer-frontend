// userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginAdmin } from '../actions/loginAdminActions';
import { IAdminData, ApiResponse } from '../../Interfaces/adminInterfaces';


interface AdminState {
    data: IAdminData | null;
    loading: boolean;
    error: string | null;
}

const initialState: AdminState = {
    data: null,
    loading: false,
    error: null,
};

const adminSlice = createSlice({
    name: 'adminAuth',
    initialState,
    reducers: {
      cleanUser : (state) => {
        state.data = null
      }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginAdmin.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(loginAdmin.fulfilled, (state, action: PayloadAction<ApiResponse>) => {
          state.loading = false;
          console.log('action.payload.user :', action.payload.admin);
          state.data = action.payload.admin;
          console.log('state.data en la slice: ', state.data)
          if (action.payload.message === 'El usuario no existe') {
            // El servidor devolvió un mensaje indicando que el usuario no existe
            // Puedes manejar esto de acuerdo a tus necesidades
          }
        })
        .addCase(
          loginAdmin.rejected,
          (state, action: any) => {
            state.loading = false;
            state.error = action.error.message || 'Error desconocido en la solicitud de inicio de sesión';
          }
        );
    },
});

export const { cleanUser } = adminSlice.actions;

export default adminSlice.reducer;

export const selectAdminAuth = (state:any) => state.adminAuth;
