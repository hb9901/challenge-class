import { useDispatch } from "react-redux";
import styled from "styled-components";
import { UPDATE_MEMO } from "../../redux/reducers/memo.reducer";
import { makeDateStr } from "./functions";

function InputForm() {
  const dispatch = useDispatch();
  const date = new Date();
  const dateStr = makeDateStr(date);

  const handleChange = ({ target }) => {
    dispatch({ type: UPDATE_MEMO, payload: { content: target.value } });
  };

  return (
    <Wrapper>
      <DateTime>{dateStr}</DateTime>
      <InputMemo onChange={handleChange} />
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
