import { getTime } from "../../assets/js/functions";

export const ADD_MEMO = "memoState/ADD_MEMO";
export const DEL_MEMO = "memoState/DEL_MEMO";
export const UPDATE_MEMO = "memoState/UPDATE_MEMOS";
export const SELECT_ID = "./memoState/SELECT_ID";
export const INIT_ID = crypto.randomUUID();

const initialState = {
  selectedID: INIT_ID,
  memos: [
    {
      id: INIT_ID,
      content: "",
      time: getTime(),
    },
  ],
};

function memoStateReducer(prevState = initialState, action) {
  switch (action.type) {
    case SELECT_ID:
      return {
        ...prevState,
        selectedID: action.payload,
      };

    case ADD_MEMO:{
      const randomID = crypto.randomUUID();
      const newMemo = {
        id: randomID,
        content: String(action.payload),
        time: getTime(),
      };

      return {
        selectedID: randomID,
        memos: [newMemo, ...prevState.memos],
      };
    }
    case DEL_MEMO: {
      const filtered = prevState.memos.filter((memo) => memo.id !== prevState.selectedID);

      if (filtered.length === 0) {
        alert("하나 이상의 메모는 남겨두어야 합니다.");
        return prevState;
      } else {
        return {
          ...prevState,
          selectedID: filtered[0].id,
          memos: filtered,
        };
      }
    }

    case UPDATE_MEMO: {
      const newMemos = prevState.memos.map((memo) => {
        if (memo.id === prevState.selectedID) {
          return {
            ...memo,
            content: action.payload,
            time: getTime(),
          };
        } else {
          return memo;
        }
      });
      return {
        ...prevState,
        memos: newMemos,
      };
    }

    default:
      return prevState;
  }
}

export default memoStateReducer;
