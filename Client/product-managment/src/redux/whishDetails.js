import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  status: "idle",
  error: null,
};



const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProductsStart: (state) => {
      state.status = "loading";
    },
    fetchProductsSuccess: (state, action) => {
      state.status = "succeeded";
      state.products = state.products.concat(action.payload);
    },
    fetchProductsFailure: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} = productSlice.actions;

export default productSlice.reducer;
