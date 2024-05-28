import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slices/couter.slice";

const store = configureStore({
  reducer: counterReducer,
});

export default store;
