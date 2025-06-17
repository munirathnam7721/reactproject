// import { createSlice } from "@reduxjs/toolkit";

// const sliceProducts = createSlice({
//   name: "productsOfCreateslice",
//   initialState: { cart: [] },
//   reducers: { 
//     addtoCart: (state, action) => {
//   const existingItem = state.cart.find(
//     (item) => item.id === action.payload.id
//   );
//   if (existingItem) {
//     existingItem.quantity += action.payload.quantity || 1;
//   } else {
//     state.cart.push({ ...action.payload });
//   }
// },


  


//     removeFromCart: (state, action) => {
//       state.cart = state.cart.filter((item) => item.id !== action.payload.id);
//     },

//     increaseQty: (state, action) => {
//       const item = state.cart.find((item) => item.id === action.payload.id);
//       if (item) {
//         item.quantity += 1;
//       }
//     },

//    decreaseQty: (state, action) => {
//   const index = state.cart.findIndex(item => item.id === action.payload.id)
//   if (index !== -1 && state.cart[index].quantity > 1) {
//     state.cart[index].quantity -= 1
//   } else {
//     state.cart.splice(index, 1)  
//   }
// }

//   },
// });

// export const { addtoCart, removeFromCart, increaseQty, decreaseQty } = sliceProducts.actions;
// export default sliceProducts.reducer;




// src/ReduxToolKit-Store/productSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Load cart from localStorage
const loadCart = () => {
  try {
    return JSON.parse(localStorage.getItem('cartItems')) || [];
  } catch {
    return [];
  }
};

// Create slice with addtoCart (unchanged name)
const productSlice = createSlice({
  name: 'cartItems',
  initialState: { cart: loadCart() },
  reducers: {
    addtoCart: (state, { payload }) => {
      const existingItem = state.cart.find(item => item.id === payload.id);
      const qty = payload.quantity || 1;
      if (existingItem) {
        existingItem.quantity += qty;
      } else {
        state.cart.push({ ...payload, quantity: qty });
      }
    },
    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter(item => item.id !== payload.id);
    },
    increaseQty: (state, { payload }) => {
      const item = state.cart.find(item => item.id === payload.id);
      if (item) item.quantity += 1;
    },
    decreaseQty: (state, { payload }) => {
      const item = state.cart.find(item => item.id === payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cart = state.cart.filter(i => i.id !== payload.id);
      }
    },
  },
});

// Middleware to save cart to localStorage
const cartMiddleware = store => next => action => {
  const result = next(action);
  try {
    localStorage.setItem('cartItems', JSON.stringify(store.getState().cartItems.cart));
  } catch {}
  return result;
};

// Exports
export const { addtoCart, removeFromCart, increaseQty, decreaseQty } = productSlice.actions;
export const cartReducer = productSlice.reducer;
export const cartMiddlewareFn = cartMiddleware;
