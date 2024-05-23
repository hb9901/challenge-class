export const UPDATE_MEMO = "memo/UPDATE_MEMO"

const initialState= {
  content: "새로운 메모", 
}

function memoReducer(prevState = initialState, action){
  switch(action.type){
    case UPDATE_MEMO:
      return action.payload ? action.payload : prevState
    default:
      return prevState;
  }

}

export default memoReducer;