import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import InputForm from "./components/InputForm";
import LeftAside from "./components/LeftAside";

function App() {
  return <>
    <GlobalStyle/>
    <Wrapper>
      <LeftAside/>
      <InputForm/>
    </Wrapper>
  </>;
}

export default App;

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 240px 1fr;

  margin: 0px auto;

  height: 500px;
  width: 100%;
  max-width: 1024px;

  border: 1px solid rgb(230, 230, 230);
  border-radius: 10px;
  
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
`;