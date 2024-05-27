import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { UPDATE_MEMO } from "../../redux/reducers/memoState.reducer";
import { getDate } from "../../utils/functions";

function InputForm() {
  const dispatch = useDispatch();
  const textAreaRef = useRef()
  const selectedID = useSelector((state) => state.memoState.selectedID);
  const memos= useSelector((state) => state.memoState.memos);
  const selectedMemo = memos.find((memo) => memo.id === selectedID);
 const date = selectedMemo?.date ? getDate(selectedMemo.date, "long") : getDate("long");

  console.log(selectedMemo.date);
  useEffect(() => {
    if(textAreaRef.current){
      textAreaRef.current.focus();
      textAreaRef.current.value = selectedMemo?.content || "";
    }
  }, [selectedID])

  const handleChange = ({ target }) => {
    dispatch({
      type: UPDATE_MEMO,
      payload: target.value,
    });
  };

  return (
    <Wrapper>
      <DateTime>{date}</DateTime>
      <InputMemo
        ref={textAreaRef}
        onChange={handleChange}
      />
    </Wrapper>
  );
}

export default InputForm;

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;

  padding: 20px;
  width: 100%;

  box-sizing: border-box;
`;

const DateTime = styled.span`
  color: rgb(128, 128, 128);
  font-size: 10px;
  margin: 0px auto 24px;
`;

const InputMemo = styled.textarea`
  all: unset;
  flex-grow: 1;
  font-size: 15px;

  white-space: nowrap;
  overflow-x: auto;
`;
