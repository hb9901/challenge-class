import { makeHourMinStr } from "../../assets/js/functions";

export const UPDATE_MEMO = "memo/UPDATE_MEMO"
export const INIT_MEMO = "memo/INIT_MEMO";

const initialState = {
  title: "새로운 메모",
  content: "",
  time: makeHourMinStr(),
};

function memoReducer(prevState = initialState, action){
  switch(action.type){
    case UPDATE_MEMO:
      return action.payload ? action.payload : initialState;
    default:
      return prevState;
  }

}

export default memoReducer;