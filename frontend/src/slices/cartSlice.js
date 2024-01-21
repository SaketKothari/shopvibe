import { createSlice } from '@reduxjs/toolkit';

import { updateCart } from '../utils/cartUtils';

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      // if the item is already in the cart
      const existItem = state.cartItems.find((x) => x._id === item._id);

      // update the quantity
      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        );
      } else {
        // Getting the same cartItems and add new item
        state.cartItems = [...state.cartItems, item];
      }

      return updateCart(state);
    },
  },
});

// Export as an action
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
