import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import 'semantic-ui-css/semantic.min.css';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
