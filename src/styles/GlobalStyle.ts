import { createGlobalStyle } from 'styled-components';

const GlobalStyle =  createGlobalStyle` 
  * {
    font-family: 'Helvetica', 'Arial';
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.colors.primary_text};
  }

  html, body, #root {
    width: 100%;
    min-height: 100%;
  }

  h1, h2, h3, h4 {
    font-family: 'Spectral';
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .container {
    max-width: 800px;
    padding-right: 16px;
    padding-left: 16px;
    margin: 0 auto;

    @media screen and (max-width: 414px) {
      padding-right: 5px;
      padding-left: 5px;
    }
  }
`;

export default GlobalStyle;