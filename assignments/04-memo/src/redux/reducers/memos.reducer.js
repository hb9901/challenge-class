import { makeHourMinStr } from "../../assets/js/functions";

export const ADD_MEMO = "memos/ADD_MEMO";
export const DEL_MEMO = "memos/DEL_MEMO";
export const UPDATE_MEMOS = "memos/UPDATE_MEMOS";

const initialState = [
  {
    id: "1",
    title: "새로운 메모",
    content: "",
    time: makeHourMinStr(),
  },
];

function memosReducer(prevState = initialState, action) {
  switch (action.type) {
    case ADD_MEMO:
      return [action.payload, ...prevState];
    case DEL_MEMO:
      return prevState.filter((memo) => memo.id !== action.payload);
    case UPDATE_MEMOS:
      console.log(action.payload)
      return prevState.map((memo) =>
        memo.id === action.payload.id ? action.payload : memo
      );
    default:
      return prevState;
  }
}

export default memosReducer;
