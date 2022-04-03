import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans JP';
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  * {
    scroll-behavior: smooth;
  }

  *, *::after, *::before  {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
`

export default GlobalStyles
