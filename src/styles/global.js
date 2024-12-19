import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar:hover {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    border-radius: 100vw;
    margin-block: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => `${theme.COLORS.RED_100}77`};
    border-radius: 100vw;
    
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.COLORS.RED_100};
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  }

  @supports (scrollbar-width: thin) {
    * {
      scrollbar-width: thin;
      scrollbar-color: ${({ theme }) => `${theme.COLORS.RED_100} ${theme.COLORS.BACKGROUND_600}`};
      scrollbar-gutter: stable;
    }
  }
  
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

    background-color:${({ theme }) => theme.COLORS.BACKGROUND_800} ;
    
    color: ${({ theme }) => theme.COLORS.WHITE_200};

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
    transition: filter 0.2;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`
