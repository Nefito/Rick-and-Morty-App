import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @keyframes onAutoFillStart {}

  @keyframes onAutoFillCancel {}

  * { 
    margin: 0; 
    padding: 0; 
    font-family: 'Montserrat', sans-serif; 
    box-sizing: border-box;
  }

  *:focus {
    outline:0;
  }

  body {
    width: 100%;
  }

  a {
    text-decoration: none;
  }

  .ReactModal__Body--open {
    overflow: hidden;
  }
`;

export const ScrollDisable = createGlobalStyle`
  body {
    overflow: hidden;
    max-height: 100vh;
  }
`;
