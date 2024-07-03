import { configureStore } from '@reduxjs/toolkit';
import artItems from './artSlice';
import cart from './cartSlice';

export const store = configureStore({
    reducer: {
        artItems,
        cart
    }
  })