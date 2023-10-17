import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "../slices/items";
import { categoryReducer } from "../slices/category";
import { authReducer } from "../slices/auth";

const store = configureStore({
  reducer: { 
    posts: postsReducer,
    category: categoryReducer,
    auth: authReducer,
  },
})

export default store;