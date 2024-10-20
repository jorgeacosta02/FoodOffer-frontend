// Guarda las categorías recibidas del back.
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCategories } from '../actions/categoryActions';


interface CategoryState {
    data: any;
    loading: boolean;
    error: string | null;
}

const initialState: CategoryState = {
    data: null,
    loading: false,
    error: null,
};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
      cleanCategories : (state) => {
        state.data = null
      }
    },
    extraReducers: (builder) => {
      builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategories.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        // console.log('action.payload:', action.payload);
        state.data = action.payload;
        // console.log('state.data en la slice: ', state.data)
      })
      .addCase(getCategories.rejected,
        (state, action: any) => {
          state.loading = false;
          state.error = action.payload || 'Error desconocido en la solicitud de inicio de sesión';
        }
      );
    },
});

export const { cleanCategories } = categorySlice.actions;

export default categorySlice.reducer;

export const selectCategories = (state: any) => state.categories;