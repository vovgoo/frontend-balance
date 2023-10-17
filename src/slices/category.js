import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "../axios";


export const fetchCategory = createAsyncThunk('category/fetchCategory', async()=>{
    const { data } = await axios.get('http://localhost:3333/category');
    return data;
})

const initialState = {
    category: {
        items: [],
        status: 'loading',
    },
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducer: {},
    extraReducers: {
        [fetchCategory.pending] : (state) => {
            state.category.status = 'loading'
        },
        [fetchCategory.fulfilled] : (state, action) => {
            state.category.items = action.payload;
            state.category.status = 'loaded'
        },
        
        [fetchCategory.rejected] : (state) => {
            state.category.items = [];
            state.category.status = 'error'
        },
    }
})

export const categoryReducer = categorySlice.reducer;