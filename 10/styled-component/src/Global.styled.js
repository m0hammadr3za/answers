import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
      box-sizing: border-box;
  }

  body {
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    padding: 0;
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
      margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
      font-size: inherit;
      font-weight: inherit;
      color: inherit;
  }

  button {
    font: inherit;
    color: inherit;
    background-color: unset;
    padding: 0;
    margin: 0;
    border: unset;
    cursor: pointer;
  }
`;
