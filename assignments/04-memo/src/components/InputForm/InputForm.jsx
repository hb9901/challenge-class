import styled from "styled-components";

function InputForm() {
  const date = new Date().getDate();
  return (
    <Wrapper>
      <DateTime>{date}</DateTime>
      <InputMemo />
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
