import { configureStore } from "@reduxjs/toolkit";
import memoStateReducer from "./reducers/memoState.reducer";

const store = configureStore({
  reducer: {
    memoState: memoStateReducer,
  },
});

export default store;