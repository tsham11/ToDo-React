import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import Home from './Home';
import imag from './do.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <img className='do' src={imag} alt="dodo" />
      <h1>Keep Track Of Daily Tasks In Life</h1>
      <button id='but'>Get Started</button>
    </div>
  );
}

export default App;
