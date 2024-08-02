import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getDetail } from '../actions/detailActions';


interface DetailState {
    data: any;
    loading: boolean;
    error: string | null;
}

const initialState: DetailState = {
    data: null,
    loading: false,
    error: null,
};

const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {
      cleanDetail : (state) => {
        state.data = null
      }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getDetail.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getDetail.fulfilled, (state, action: PayloadAction<any>) => {
          state.loading = false;
          console.log('action.payload:', action.payload);
          state.data = action.payload;
          console.log('state.data en la slice: ', state.data)
        })
        .addCase(getDetail.rejected,
          (state, action: any) => {
            state.loading = false;
            state.error = action.payload || 'Error desconocido en la solicitud de la opción seleccionada.';
          }
        );
    },
});

export const { cleanDetail } = detailSlice.actions;

export default detailSlice.reducer;

export const selectDetail = (state: any) => state.detail;