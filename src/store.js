// store.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Import your cart reducer

// Configure the Redux store
const store = configureStore({
    reducer: {
        cart: cartReducer, // Add your cart reducer
    },
});

export default store;
