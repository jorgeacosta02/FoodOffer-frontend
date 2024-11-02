// Guarda los avisos seleccionados como favoritos
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoritesState {
  style: boolean;
  favorites: number[];
}
  
const initialState: FavoritesState = {
  style: false,
  favorites: [],
};
  
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleStyle: (state) => {
      state.style = !state.style
    },
    falseStyle: (state) => {
        state.style = false
    },

    cleanFavoritesArray: (state) => {
      state.favorites = [];  // Limpia el array de favoritos
    },
    toggleFavorites: (state, action: PayloadAction<number>) => {
      if (state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter((category:any) => category !== action.payload);
      } else {
        state.favorites.push(action.payload);
      }
    },
  },
});

export const {
  cleanFavoritesArray,
  toggleStyle,
  falseStyle,
  toggleFavorites, 
} = favoritesSlice.actions;

export const selectFavorites = ( state:any ) => state.favorites

export default favoritesSlice.reducer;
