import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import 'semantic-ui-css/semantic.min.css';
import Main from './components/Main/Main';
import { AlbumsContextProvider } from './contexts/AlbumsContext';
import { PhotosContextProvider } from './contexts/PhotosContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AlbumsContextProvider>
          <PhotosContextProvider>
            <Nav />
            <Main />
          </PhotosContextProvider>
        </AlbumsContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
