import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ConnectedMain } from 'Containers';

import './services';

const App = () => {
  return (
     <BrowserRouter>
        <div className="App">
            <ConnectedMain />
        </div>
    </BrowserRouter>
  );
};

export default App;
