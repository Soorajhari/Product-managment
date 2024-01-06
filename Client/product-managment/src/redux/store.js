import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./userDetails";
import productReducer from "./whishDetails"

const store = configureStore({
  reducer: {
    auth: authReducer,
    product:productReducer
    
  },
});

export default store;
