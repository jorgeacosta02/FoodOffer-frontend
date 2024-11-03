// Guarda los avisos seleccionados como favoritos
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoritesState {
  style: boolean;
  favorites: string[];
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
    toggleFavorites: (state, action: PayloadAction<string>) => {
      if (state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter((favorite:any) => favorite !== action.payload);
      } else {
        state.favorites.push(action.payload);
      }
      console.log('favorites: ', state.favorites)
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
