import { createSlice } from '@reduxjs/toolkit'

export const artSlice = createSlice({
    name: 'artItems',
    initialState: {
        selectedCategory: 'SCULPTURE'
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    }
})

export const getSelectedCategory = state => state.artItems.selectedCategory;
export const { filterCategory } = artSlice.actions;
export default artSlice.reducer;