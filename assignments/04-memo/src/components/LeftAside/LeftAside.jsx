import styled from "styled-components";
import Header from "./Header";
import Memos from "./Memos";

function LeftAside() {
  return (
    <Wrapper>
      <Header/>
      <Memos/>
    </Wrapper>
  );
}

export default LeftAside;

const Wrapper = styled.aside`
  display: grid;
  grid-template-columns: 1fr;

  height: 100%;
  
  border-right: 1px solid rgb(230, 230, 230);

  align-content: flex-start;
  overflow-y: auto;
`;