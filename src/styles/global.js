import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Roboto', serif;

    background-color:${({ theme }) => theme.COLORS.BACKGROUND_900} ;
    
    color: ${({ theme }) => theme.COLORS.WHITE_400};

  }

  body, button, input, textarea {
    font-family: 'Roboto', serif;
    font-size: 1.6rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: all 0.3s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`
