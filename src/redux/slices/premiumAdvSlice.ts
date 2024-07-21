// userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllPremiumAdv } from '../actions/premiumAdvActions';


interface PremiumAdvState {
    data: any;
    loading: boolean;
    error: string | null;
}

const initialState: PremiumAdvState = {
    data: null,
    loading: false,
    error: null,
};

const premiumAdvSlice = createSlice({
    name: 'premiumAdv',
    initialState,
    reducers: {
      cleanPremiumAdvs : (state) => {
        state.data = null
      }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllPremiumAdv.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getAllPremiumAdv.fulfilled, (state, action: PayloadAction<any>) => {
          state.loading = false;
          console.log('action.payload:', action.payload);
          state.data = action.payload;
          console.log('state.data en la slice: ', state.data)
          // if (action.payload.message === 'El usuario no existe') {
          //   // El servidor devolvió un mensaje indicando que el usuario no existe
          //   // Puedes manejar esto de acuerdo a tus necesidades
          // }
        })
        .addCase(getAllPremiumAdv.rejected,
          (state, action: any) => {
            state.loading = false;
            state.error = action.error.message || 'Error desconocido en la solicitud de inicio de sesión';
          }
        );
    },
});

export const { cleanPremiumAdvs } = premiumAdvSlice.actions;

export default premiumAdvSlice.reducer;

export const selectPremiumAdv = (state:any) => state.premiumAdv;