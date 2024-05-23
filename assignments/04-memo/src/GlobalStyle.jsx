import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    line-height: 1.15;
    text-size-adjust: 100%;
    tab-size: 4;

    height: 100%;
  }

  body{
    margin: 0px;
    height: 100%;
  }


  #root {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
}
`;

export default GlobalStyle;
