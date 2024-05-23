export const ADD_MEMO = "memos/ADD_MEMO";
export const DEL_MEMO = "memos/DEL_MEMO"

const initialState= [{
  date:"",
  title: "새로운 메모",
}]

function memosReducer(prevState = initialState, action){
  switch(action){
    case ADD_MEMO:
      return [...prevState, action.payload];
    case DEL_MEMO:
      return prevState;
    default:
      return prevState;
  } 
}

export default memosReducer;