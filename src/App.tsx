import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './Routes';

import GlobalStyle from './styles/GlobalStyle';

import theme from './styles/theme';
import { UserProvider } from './UserContext';

const App: React.FC = () =>  (
  <ThemeProvider theme={ theme }>
    <GlobalStyle />
    
    <BrowserRouter>
      <UserProvider>
        <Routes />
      </UserProvider>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
