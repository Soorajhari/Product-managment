import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./userDetails";

const store = configureStore({
  reducer: {
    auth: authReducer,
    
  },
});

export default store;
