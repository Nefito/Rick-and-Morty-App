import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ConnectedMain } from 'containers';

import '../services';

const App = () => {
  return (
     <BrowserRouter>
        <ConnectedMain />
    </BrowserRouter>
  );
};

export default App;
