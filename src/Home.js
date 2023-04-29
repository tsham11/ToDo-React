import React from 'react'
import imag from './do.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';



function Home() {

  const navigate = useNavigate();
  function click(){
    navigate('/sign')
  }

  return (
    <div className="App">
      <img className='do' src={imag} alt="dodo" />
      <h1 className='keep'>Keep Track Of Daily Tasks In Life</h1>
      <button className='star' id='but' onClick={click} >Get Started</button>

    </div>
  );
}

export default Home;
