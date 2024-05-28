export const INIT_MEMOSTATE = "memoStaet/INIT_MEMOSTATE"
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
      date: Date.now(),
    },
  ],
};

function memoStateReducer(prevState = initialState, action) {
  switch (action.type) {
    case SELECT_ID: {
      const newMemoState = {
        ...prevState,
        selectedID: action.payload,
      };
      localStorage.setItem("memoState", JSON.stringify(newMemoState));
      return newMemoState;
    }

    case INIT_MEMOSTATE:{
      return action.payload ? action.payload : prevState;
    }

    case ADD_MEMO: {
      const newMemo = {
        id: action.payload.id,
        content: "",
        date: Date.now(),
      };

      const newMemoState = {
        selectedID: newMemo.id,
        memos: [newMemo, ...prevState.memos],
      };

      localStorage.setItem("memoState", JSON.stringify(newMemoState));
      return newMemoState;
    }
    case DEL_MEMO: {
      const filtered = prevState.memos.filter(
        (memo) => memo.id !== prevState.selectedID
      );

      if (filtered.length === 0) {
        alert("하나 이상의 메모는 남겨두어야 합니다.");
        return prevState;
      } else {
        const newMemoState = {
          selectedID: filtered[0].id,
          memos: filtered,
        };

        localStorage.setItem("memoState", JSON.stringify(newMemoState));
        return newMemoState;
      }
    }

    case UPDATE_MEMO: {
      const newMemos = prevState.memos.map((memo) => {
        if (memo.id === prevState.selectedID) {
          return {
            ...memo,
            content: action.payload,
          };
        } else {
          return memo;
        }
      });

      const newMemoState = {
        ...prevState,
        memos: newMemos,
      };

      localStorage.setItem("memoState", JSON.stringify(newMemoState));
      return newMemoState;
    }

    default:
      return prevState;
  }
}

export default memoStateReducer;
