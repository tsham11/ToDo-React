// import logo from './logo.svg';
import imag from './do.svg';

import './App.css';

function Home() {
  return (
    <div className="App">
      <img className='do' src={imag} alt="dodo" />
      <h1>Keep Track Of Daily Tasks In Life</h1>
      <button id='but'>Get Started</button>
    </div>
  );
}

export default Home;
