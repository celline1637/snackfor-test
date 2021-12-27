import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  :root{
    font-size: 13px;
    @media screen and (max-width : 600px){
      font-size: 9px;
    }  
  }

  html, body {
   -webkit-tap-highlight-color : transparent;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

  html{
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    font: inherit;
  }

  body{
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    background-color: white;
    -ms-overflow-style: none; 
    scrollbar-width: none; 
    &::-webkit-scrollbar {
      display: none;
      }
    }
  ul,
  ol {
    list-style: none;
  }

  a,
  a:visited {
    text-decoration: none;
  }

  *:focus {
    outline: none;
  }

  button {
    border: none;
    outline: none;
    text-shadow: none;
    background: none;
    cursor: pointer;
  }

  input {
    box-shadow: none;
  }

  textarea {
    box-shadow: none;
    -webkit-appearance: none;
  }
`;

export default GlobalStyle;
