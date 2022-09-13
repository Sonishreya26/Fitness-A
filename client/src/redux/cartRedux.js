import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += parseInt(action.payload.price * action.payload.quantity);
    },
    updateProduct: (state, action) => {
      console.log(action.payload);
      state.quantity = action.payload.products.length;
      state.products = action.payload.products;
      state.total = action.payload.total;
    },
    emptyCart: (state, action) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    },
  },
});

export const { addProduct, updateProduct, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
