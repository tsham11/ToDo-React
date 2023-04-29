import React from 'react'
import imag from './cam.svg';

import './Sign.css';
function Sign() {
  return (
    <div>
        <form className='userForm' action="">
            <h1 className='start'>Get Started</h1>
            <h2>add a photo</h2>
            
            <div className='circle'>
              <label for="file-upload" class="custom-file-upload">
              <img id='cam' src={imag} alt="cam img" />
              </label>
              <input id="file-upload" type="file"></input>

            </div>
            <h2>fill in you name</h2>
            <div className='inputdiv'>
              <input type="text" placeholder='your name'/>
            </div>
            <button className='sign-btn' id='butn'>Sign In</button>
            
      </form>

    </div>
    
  )
}

export default Sign