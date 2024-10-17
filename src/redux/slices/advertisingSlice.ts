// Recibe todos los avisos activos para ese día.
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllAdvertising } from '../actions/advertisingActions';


interface AdvertisingState {
    data: any;
    loading: boolean;
    error: string | null;
}

const initialState: AdvertisingState = {
    data: null,
    loading: false,
    error: null,
};

const advertisingSlice = createSlice({
    name: 'advertising',
    initialState,
    reducers: {
      cleanAdvertisings : (state) => {
        state.data = null
      }
    },
    extraReducers: (builder) => {
      builder
      .addCase(getAllAdvertising.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllAdvertising.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        console.log('action.payload:', action.payload);
        state.data = action.payload;
        console.log('state.data en la slice: ', state.data)
      })
      .addCase(getAllAdvertising.rejected,
        (state, action: any) => {
          state.loading = false;
          state.error = action.payload || 'Error desconocido en la solicitud de inicio de sesión';
        }
      );
    },
});

export const { cleanAdvertisings } = advertisingSlice.actions;

export default advertisingSlice.reducer;

export const selectAdvertisings = (state: any) => state.advertising;