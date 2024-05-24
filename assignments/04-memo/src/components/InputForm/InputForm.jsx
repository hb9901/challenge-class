import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getDate } from "../../assets/js/functions";
import { UPDATE_MEMO } from "../../redux/reducers/memoState.reducer";

function InputForm() {
  const dispatch = useDispatch();
  const {selectedID, memos} = useSelector((state) => state.memoState);
  const date = getDate();
  
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
        value={memos.filter((memo) => memo.id === selectedID)[0].content}
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
