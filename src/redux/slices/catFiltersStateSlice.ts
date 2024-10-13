import { createSlice } from "@reduxjs/toolkit";


interface IcatFiltersState{
    catFiltersState: boolean
}

const initialState: IcatFiltersState = {
    catFiltersState: false
}

export const catFiltersStateSlice = createSlice({
    name: 'catFiltersState',
    initialState,
    reducers: {
        toggleCatFiltersState: (state) => {
            state.catFiltersState = !state.catFiltersState
        },
        falseCatFiltersState: (state) => {
            state.catFiltersState = false
        }
    }
})

export const { toggleCatFiltersState, falseCatFiltersState } = catFiltersStateSlice.actions;

export const selectCatfiltersState = ( state:any ) => state.catFiltersState

export default catFiltersStateSlice.reducer;