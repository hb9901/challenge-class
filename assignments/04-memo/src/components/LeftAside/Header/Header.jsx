import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { INIT_MEMO } from "../../../redux/reducers/memo.reducer";
import { ADD_MEMO, DEL_MEMO } from "../../../redux/reducers/memos.reducer";
import { UPDATE_ID } from "../../../redux/reducers/selectedID.reducer";

function Header() {
  const selectedID = useSelector((state) => state.selectedID);
  const memo = useSelector((state) => state.memo);
  const dispatch = useDispatch();

  const handleClickAdd = () => {
    dispatch({
      type: ADD_MEMO,
      payload: {
        id: crypto.randomUUID(),
        ...memo,
      },
    });
    dispatch({
      type: INIT_MEMO,
    });
  };

  const handleClickDel = () => {
    if (selectedID !== "1") {
      dispatch({
        type: DEL_MEMO,
        payload: selectedID,
      });
      dispatch({
        type: UPDATE_ID,
        payload: "1",
      })
    }
  };

  return (
    <Wrapper>
      <Btn onClick={handleClickAdd}>새 메모 작성하기</Btn>
      <Btn onClick={handleClickDel}>삭제</Btn>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 12px 16px;

  border-bottom: 1px solid rgb(230, 230, 230);
`;

const Btn = styled.button`
  all: unset;

  padding: 4px 8px;

  font-size: 13px;
  font-weight: 500;

  color: rgb(128, 128, 128);

  transition: all 120ms ease 0s;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;
