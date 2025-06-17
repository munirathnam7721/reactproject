// import { configureStore } from "@reduxjs/toolkit";
// import productReducer from "../Redux/ProductSlice"
// export const store=configureStore({
//     reducer:{cartItems:productReducer}
// })

import { configureStore } from '@reduxjs/toolkit';
import { cartReducer, cartMiddlewareFn } from "./ProductSlice";

export const store = configureStore({
  reducer: { cartItems: cartReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartMiddlewareFn),
});
