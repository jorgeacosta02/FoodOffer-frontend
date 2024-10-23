// Guarda los valores para filtrar avisos, desde el componente morefilters
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  style: boolean;
  categories: number[];
  attributes: string[];
  minPrice: number|null;
  maxPrice: number|null;
  locations: string[];
}
  
const initialState: FilterState = {
  style: false,
  categories: [],
  attributes: [],
  minPrice: 0,
  maxPrice: 0,
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
    // toggleLocation: (state, action: PayloadAction<string>) => {
    //   if (state.locations.includes(action.payload)) {
    //     state.locations = state.locations.filter(location => location !== action.payload);
    //   } else {
    //     state.locations.push(action.payload);
    //   }
    // },
    setMinPrice: (state, action: PayloadAction<number|null>) => {
      if(typeof(action.payload) !== "number"){
        state.minPrice = 0;
      }else{
        state.minPrice = action.payload;
      }
    },
    setMaxPrice: (state, action: PayloadAction<number|null>) => {
      if(typeof(action.payload) !== "number"){
        state.maxPrice = 0;
      }else{
        state.maxPrice = action.payload;
      }
    },
    cleanAllFilters: (state) => {
      state.categories = [];  // Limpia el array
      state.attributes = [];
      state.minPrice = 0;
      state.maxPrice = 0;
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
  // toggleLocation, 
  setMinPrice,
  setMaxPrice,
  cleanAllFilters,
} = filterSlice.actions;

export const selectFilters = ( state:any ) => state.filters

export default filterSlice.reducer;
