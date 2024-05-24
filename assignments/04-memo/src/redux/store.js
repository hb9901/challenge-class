import { configureStore } from "@reduxjs/toolkit";
import memoReducer from "./reducers/memo.reducer";
import memosReducer from "./reducers/memos.reducer";
import selectedID from "./reducers/selectedID.reducer";

const store = configureStore({
  reducer: {
    selectedID: selectedID,
    memo: memoReducer,
    memos: memosReducer,
  },
});

export default store;