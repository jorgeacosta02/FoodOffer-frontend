// userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginUser } from '../actions/actions';
import { IUserData, ApiResponse } from '../../Interfaces/userInterfaces';


interface UserState {
    data: IUserData | null;
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    data: null,
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
      cleanUser : (state) => {
        state.data = null
      }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action: PayloadAction<ApiResponse>) => {
          state.loading = false;
          console.log('action.payload.user :', action.payload.user);
          state.data = action.payload.user;
          console.log('state.data en la slice: ', state.data)
          if (action.payload.message === 'El usuario no existe') {
            // El servidor devolvió un mensaje indicando que el usuario no existe
            // Puedes manejar esto de acuerdo a tus necesidades
          }
        })
        .addCase(
          loginUser.rejected,
          (state, action: any) => {
            state.loading = false;
            state.error = action.error.message || 'Error desconocido en la solicitud de inicio de sesión';
          }
        );
    },
});

export const { cleanUser } = userSlice.actions;

export default userSlice.reducer;

export const selectUserAuth = (state:any) => state.userAuth;






// import { createSlice } from "@reduxjs/toolkit";


// const initialState = {
//     firstName: '',
//     lastName: '',
//     dni: 0,
//     healthPlan: '',
//     phone: 0,
//     email: '',
//     password: '',
//     status: false,
//     role: '',
// }

// export const userAuthSlice = createSlice({
//     name: 'userAuth',
//     initialState,
//     reducers: {

//     }
// })

// export const {  } = userAuthSlice.actions;

// export const userAuthState = (state:any) => state.userAuth;

// export default userAuthSlice.reducer;