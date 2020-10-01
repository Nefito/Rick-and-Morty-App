import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { ConnectedMain } from 'containers';
import { Theme } from 'theme';

import './services';


const App = () => {
  return (
     <BrowserRouter>
        <ThemeProvider theme={Theme}>
              <ConnectedMain />
        </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
