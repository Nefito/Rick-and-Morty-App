import Main from 'Containers/MainPage';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
     <BrowserRouter>
        <div className="App">
            <Main />
        </div>
    </BrowserRouter>
  );
};

export default App;
