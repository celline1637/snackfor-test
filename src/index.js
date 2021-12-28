import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Routes';

import GlobalStyle from './styles/GlobalStyle.js';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.js';

ReactDOM.render(
  <ThemeProvider theme={{ ...theme }}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>,
  document.getElementById('root')
);
