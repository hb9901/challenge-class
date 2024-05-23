export const UPDATE_MEMO = "memo/UPDATE_MEMO"

const initialState= {
  date: new Date(),
  content: "", 
}

function memoReducer(prevState = initialState, action){
  switch(action){
    case UPDATE_MEMO:
      return {
        date: new Date(),
        content: action.payload,
      };
    default:
      return prevState;
  }

}

export default memoReducer;