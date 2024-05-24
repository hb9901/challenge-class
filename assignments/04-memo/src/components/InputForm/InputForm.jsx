import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { makeDateStr, makeHourMinStr } from "../../assets/js/functions";
import { UPDATE_MEMO } from "../../redux/reducers/memo.reducer";

function InputForm() {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.memo.content);
  const date = makeDateStr();
  const time = makeHourMinStr(date);

  const handleChange = ({ target }) => {
    dispatch({
      type: UPDATE_MEMO,
      payload: {
        title: target.value.length > 0 ? target.value : "새로운 메모",
        content: target.value.length > 0 ? target.value : "",
        time,
      },
    });
  };

  return (
    <Wrapper>
      <DateTime>{date}</DateTime>
      <InputMemo value={content} onChange={handleChange} />
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
