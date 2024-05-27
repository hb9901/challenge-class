import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { SELECT_ID } from "../../../redux/reducers/memoState.reducer";
import { getDate } from "../../../utils/functions";

function Memos() {
  const memoState = useSelector((state) => state.memoState);
  const dispatch = useDispatch();

  const handleClick = ({ currentTarget }) => {
    dispatch({
      type: SELECT_ID,
      payload: currentTarget.dataset.id,
    });
  };

  return (
    <MemosList>
      {memoState.memos.map((memo) => {
        return (
          <Memo
            key={memo.id}
            data-id={memo.id}
            data-title={memo.title}
            data-content={memo.content}
            data-date={memo.date}
            onClick={handleClick}
            $isSelected={memoState.selectedID === memo.id}
          >
            <MemoTitle>{memo.content ? memo.content : "새로운 메모"}</MemoTitle>
            <MemoDate>{getDate(memo.date, "short")}</MemoDate>
          </Memo>
        );
      })}
    </MemosList>
  );
}

export default Memos;

const MemosList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;

  row-gap: 8px;
  padding: 20px 12px;
  margin: 0px;

  overflow-x: hidden;
  list-style: none;
`;

const Memo = styled.li`
  display: inline-grid;
  padding: 12px 24px;

  height: 56px;

  width: 100%;

  border-radius: 4px;

  background-color: rgb(255, 224, 127);

  cursor: pointer;
  box-sizing: border-box;

  ${({ $isSelected }) =>
    $isSelected
      ? `background-color: rgb(255, 224, 127);`
      : `background-color: white`}
`;

const MemoTitle = styled.h6`
  margin: 0px 0px 2px;
  min-height: 15px;

  font-size: 13px;
  font-weight: 700;

  text-overflow: ellipsis;
  overflow-x: hidden;
  white-space: nowrap;
`;

const MemoDate = styled.time`
  font-size: 12px;
  color: rgb(64, 64, 64);
`;
