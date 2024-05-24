export const UPDATE_ID = "ID/UPDATE_ID";

const initialState = "1";

function selectedID(prevState = initialState, action) {
  switch (action.type) {
    case UPDATE_ID:
      return action.payload ? action.payload: prevState ;
    default:
      return prevState;
  }
}

export default selectedID;
