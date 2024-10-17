// Guarda los valores para filtrar avisos, desde el componente morefilters
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
    categories: string[];
    priceRange: [number, number];
    ratings: number[];
    locations: string[];
  }
  
  const initialState: FilterState = {
    categories: [],
    priceRange: [0, 100],
    ratings: [],
    locations: [],
  };
  
  const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
      toggleCategory: (state, action: PayloadAction<string>) => {
        if (state.categories.includes(action.payload)) {
          state.categories = state.categories.filter(category => category !== action.payload);
        } else {
          state.categories.push(action.payload);
        }
      },
      toggleRating: (state, action: PayloadAction<number>) => {
        if (state.ratings.includes(action.payload)) {
          state.ratings = state.ratings.filter(rating => rating !== action.payload);
        } else {
          state.ratings.push(action.payload);
        }
      },
      toggleLocation: (state, action: PayloadAction<string>) => {
        if (state.locations.includes(action.payload)) {
          state.locations = state.locations.filter(location => location !== action.payload);
        } else {
          state.locations.push(action.payload);
        }
      },
      setPriceRange: (state, action: PayloadAction<[number, number]>) => {
        state.priceRange = action.payload;
      },
    },
  });
  
  export const { toggleCategory, toggleRating, toggleLocation, setPriceRange } = filterSlice.actions;
  export default filterSlice.reducer;
  