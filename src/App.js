import React from 'react';
// import ReactDOM from 'react-dom/client';
import { Route, Routes} from 'react-router-dom';

import './App.css';
import Home from './Home';
import Sign from './Sign';
import List from './List';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/sign' element={<Sign />} ></Route>
        <Route path='/list' element={<List/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
