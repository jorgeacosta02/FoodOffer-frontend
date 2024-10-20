// Guarda los valores para filtrar avisos, desde el componente morefilters
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  style: boolean;
  categories: number[];
  attributes: string[];
  priceRange: [number, number];
  locations: string[];
}
  
const initialState: FilterState = {
  style: false,
  categories: [],
  attributes: [],
  priceRange: [0, 100],
  locations: [],
};
  
const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleStyle: (state) => {
      state.style = !state.style
    },
    falseStyle: (state) => {
        state.style = false
    },
    oneCategory: (state, action: PayloadAction<number>) => {
      state.categories = [action.payload];
      // console.log('state en filtersSlice', state.categories);
    },
    cleanCategoriesArray: (state) => {
      state.categories = [];  // Limpia el array
    },
    toggleCategory: (state, action: PayloadAction<number>) => {
      if (state.categories.includes(action.payload)) {
        state.categories = state.categories.filter(category => category !== action.payload);
      } else {
        state.categories.push(action.payload);
      }
    },
    toggleAttributes: (state, action: PayloadAction<string>) => {
      if (state.attributes.includes(action.payload)) {
        state.attributes = state.attributes.filter(rating => rating !== action.payload);
      } else {
        state.attributes.push(action.payload);
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

export const {
  oneCategory,
  cleanCategoriesArray,
  toggleStyle,
  falseStyle,
  toggleCategory, 
  toggleAttributes, 
  toggleLocation, 
  setPriceRange 
} = filterSlice.actions;

export const selectFilters = ( state:any ) => state.filters

export default filterSlice.reducer;
