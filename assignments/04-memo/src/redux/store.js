import { configureStore } from "@reduxjs/toolkit";
import memoReducer from "./reducers/memo.reducer";
import memosReducer from "./reducers/memos.reducer";

const store = configureStore({
  reducer: {
    memo: memoReducer,
    memos: memosReducer,
  }
})

export default store;