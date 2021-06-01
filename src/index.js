import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import firebaseContext from './contexts/firebaseContext'
import { firebase, fieldValue } from './lib/firebase'

ReactDOM.render(
  <React.StrictMode >
    <firebaseContext.Provider value={{firebase}}>
      <App />
    </firebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

