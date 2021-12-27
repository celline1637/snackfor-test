import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Routes';

import GlobalStyle from './styles/GlobalStyle.js';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.js';
import media from './styles/media.js';

ReactDOM.render(
  <ThemeProvider theme={{ ...theme, ...media }}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>,
  document.getElementById('root')
);
