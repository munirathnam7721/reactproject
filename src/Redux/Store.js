import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Redux/ProductSlice"
export const store=configureStore({
    reducer:{cartItems:productReducer}
})