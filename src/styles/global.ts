import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import background from '../assets/images/background.svg';

export default createGlobalStyle`
  :root {
    --shape: #ffffff;
    --blue: #7159c1;
    --text-title: #333;
    --text-body: #666;
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: var(--blue) url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }

  //        SCREEN SIZE x FONT SIZE
  @media screen and (max-width: 3840px) {
    html {
      font-size: 100%;
    }
  }
  @media screen and (max-width: 720px) {
    html {
      font-size: 93.75%;
    }
  }
  @media screen and (max-width: 360px) {
    html {
      font-size: 87.5%;
    }
  }
`;
