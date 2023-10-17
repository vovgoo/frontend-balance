import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "../axios";


export const fetchItems = createAsyncThunk('item/fetchPosts', async()=>{
    const { data } = await axios.get('http://localhost:3333/item');
    return data;
})

const initialState = {
    posts: {
        items: [],
        status: 'loading',
    },
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducer: {},
    extraReducers: {
        [fetchItems.pending] : (state) => {
            state.posts.status = 'loading'
        },
        [fetchItems.fulfilled] : (state, action) => {
            state.posts.items = action.payload;
            state.posts.status = 'loaded'
        },
        
        [fetchItems.rejected] : (state) => {
            state.posts.items = [];
            state.posts.status = 'error'
        },
    }
})

export const postsReducer = postsSlice.reducer;