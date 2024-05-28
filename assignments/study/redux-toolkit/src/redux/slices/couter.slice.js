import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  school:{
    classe:[
      {students:[{이름:"text", 나이: 21}]}
    ]
  }
};
const counterSlice = createSlice({
  initialState,
  name: "counter",
  reducers: {
    increment: (state, action) => {
      console.log(action.type); // "counter(name)/increment"

      const value = action.payload;

      //return { ...state, count: state.count + value }
      state.count = state.count + value;
    },
    decrement: (state, action) => {
      const value = action.payload;

      state.count = state.count - value;
    },
  },
});

export const counterReducer = counterSlice.reducer;

export const { increment, decrement } = counterSlice.actions;