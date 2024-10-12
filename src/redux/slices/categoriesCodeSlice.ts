import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CategoryCodeState {
    data: number[];  // Un array de números
    loading: boolean;
    error: string | null;
}

const initialState: CategoryCodeState = {
    data: [],  // Array vacío inicialmente
    loading: false,
    error: null,
};

const categoryCodeSlice = createSlice({
    name: 'categoryCode',
    initialState,
    reducers: {
      addCategoryCode: (state, action: PayloadAction<number>) => {
        state.data = [action.payload];
        console.log('state en categoriesCodeSlice', state.data);
      },
      cleanCategoryCodes: (state) => {
        state.data = [];  // Limpia el array
      }
    },
});


export const { addCategoryCode, cleanCategoryCodes } = categoryCodeSlice.actions;

export default categoryCodeSlice.reducer;

export const selectCategorieCodes = (state: any) => state.categoryCodes;
