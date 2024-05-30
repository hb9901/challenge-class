import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { INIT_MEMOSTATE } from "../../redux/reducers/memoState.reducer";
import LeftAside from "./LeftAside";

function Layout() {
  const dispatch =useDispatch();
  const memoState = JSON.parse(localStorage.getItem("memoState"));

  dispatch({
    type: INIT_MEMOSTATE,
    payload: memoState,
  })

  return (
    <Wrapper>
      <LeftAside />
      <Outlet />
    </Wrapper>
  );
}

export default Layout;

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
