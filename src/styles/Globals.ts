import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyles
