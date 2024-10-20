// Guarda los atributos recibidas del back.
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAttributes } from '../actions/attributesActions';


interface AttributesState {
    data: any;
    loading: boolean;
    error: string | null;
}

const initialState: AttributesState = {
    data: null,
    loading: false,
    error: null,
};

const attributeSlice = createSlice({
    name: 'attribute',
    initialState,
    reducers: {
      cleanAttributeses : (state) => {
        state.data = null
      }
    },
    extraReducers: (builder) => {
      builder
      .addCase(getAttributes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAttributes.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        // console.log('action.payload:', action.payload);
        state.data = action.payload;
        // console.log('state.data en la slice: ', state.data)
      })
      .addCase(getAttributes.rejected,
        (state, action: any) => {
          state.loading = false;
          state.error = action.payload || 'Error desconocido en la solicitud de inicio de sesión';
          // console.log('action.payload:', action.payload);
        }
      );
    },
});

export const { cleanAttributeses } = attributeSlice.actions;

export default attributeSlice.reducer;

export const selectAttributes = (state: any) => state.attributes;