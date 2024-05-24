import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { UPDATE_MEMO } from "../../../redux/reducers/memo.reducer";
import { UPDATE_MEMOS } from "../../../redux/reducers/memos.reducer";
import { UPDATE_ID } from "../../../redux/reducers/selectedID.reducer";

function Memos() {
  const typingMemo = useSelector((state) => state.memo);
  const memos = useSelector((state) => state.memos);
  const selectedID = useSelector((state) => state.selectedID);
  const dispatch = useDispatch();
  const START_INDEX = memos.length - 1;

  const handleClick = ({ currentTarget }) => {
    dispatch({
      type: UPDATE_MEMO,
      payload: {
        title: currentTarget.dataset.title,
        content: currentTarget.dataset.content,
        time: currentTarget.dataset.time,
      },
    });
    dispatch({
      type: UPDATE_MEMOS,
      payload: {
        id: selectedID,
        ...typingMemo,
      },
    });
    dispatch({
      type: UPDATE_ID,
      payload: currentTarget.dataset.id,
    });
  };

  return (
    <MemosList>
      <Memo
        data-id={memos[START_INDEX].id}
        data-title={memos[START_INDEX].title}
        data-content={memos[START_INDEX].content}
        data-time={memos[START_INDEX].time}
        onClick={handleClick}
        $isSelected={selectedID === memos[START_INDEX].id}
      >
        <MemoTitle>
          {selectedID === memos[START_INDEX].id
            ? typingMemo.title
            : memos[START_INDEX].title}
        </MemoTitle>
        <MemoDate>{memos[START_INDEX].time}</MemoDate>
      </Memo>
      {memos.map((memo, index) => {
        if (index !== START_INDEX) {
          return (
            <Memo
              key={memo.id}
              data-id={memo.id}
              data-title={memo.title}
              data-content={memo.content}
              data-time={memo.time}
              onClick={handleClick}
              $isSelected={selectedID === memo.id}
            >
              <MemoTitle>
                {selectedID === memo.id ? typingMemo.title : memo.title}
              </MemoTitle>
              <MemoDate>{memo.time}</MemoDate>
            </Memo>
          );
        }
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
