// Slice para ostrar el componente de conjunto de filtros
import { createSlice } from "@reduxjs/toolkit";


interface ImoreFiltersState{
    moreFiltersState: boolean
}

const initialState: ImoreFiltersState = {
    moreFiltersState: false
}

export const moreFiltersStateSlice = createSlice({
    name: 'moreFiltersState',
    initialState,
    reducers: {
        toggleMoreFiltersState: (state) => {
            state.moreFiltersState = !state.moreFiltersState
        },
        falseMoreFiltersState: (state) => {
            state.moreFiltersState = false
        }
    }
})

export const { toggleMoreFiltersState, falseMoreFiltersState } = moreFiltersStateSlice.actions;

export const selectMoreFiltersState = ( state:any ) => state.moreFiltersState

export default moreFiltersStateSlice.reducer;