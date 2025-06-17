import { createSlice } from "@reduxjs/toolkit";

const sliceProducts = createSlice({
  name: "productsOfCreateslice",
  initialState: { cart: [] },
  reducers: { 
    addtoCart: (state, action) => {
  const existingItem = state.cart.find(
    (item) => item.id === action.payload.id
  );
  if (existingItem) {
    existingItem.quantity += action.payload.quantity || 1;
  } else {
    state.cart.push({ ...action.payload });
  }
},


  


    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    increaseQty: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },

   decreaseQty: (state, action) => {
  const index = state.cart.findIndex(item => item.id === action.payload.id)
  if (index !== -1 && state.cart[index].quantity > 1) {
    state.cart[index].quantity -= 1
  } else {
    state.cart.splice(index, 1)  
  }
}

  },
});

export const { addtoCart, removeFromCart, increaseQty, decreaseQty } = sliceProducts.actions;
export default sliceProducts.reducer;