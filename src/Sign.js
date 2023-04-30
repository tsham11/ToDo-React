import React, { useRef, useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import imag from './cam.svg';
import './Sign.css';

function Sign() {

  const navigate = useNavigate();
  const data=useRef();
  function click(){

      localStorage.setItem("name", data.current.value )

  //   document.querySelector("#file-upload").addEventListener("change", function(){
  //     console.log(this.files)
  //   const reader = new FileReader();

  //   reader.addEventListener("load", ()=> {
  //     localStorage.setItem("recent-image", reader.result);
  //   });
  //   reader.readAsDataURL(this.files[0]);
   
  // });

  navigate('/list');
  }

  const [image, setImage] = useState({ preview: "", raw: "" });
   const handleChange = e => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  };
 
  // navigate('/list')

  return (
    <div>
        <form className='userForm' action="">
            <h1 className='start'>Get Started</h1>
            <h2>add a photo</h2>
            
            <div className='circle'>
              <label htmlFor="file-upload" className="custom-file-upload">
                {image.preview ? (
              <img id='camprev' src={image.preview}   alt="cam img" /> ) : ( 
                 <img id='cam' src={imag}  alt="cam img" />

              )}
              </label>
              <input id="file-upload" type="file" onChange={handleChange}></input>

            </div>
            <h2>fill in you name</h2>
            <div className='inputdiv'>
              <input ref={data} className='inpt' type="text" placeholder='your name'/>
            </div>
            <button className='sign-btn' id='butn' onClick={click}>Sign In</button>
            
      </form>

    </div>
    
  )
}

export default Sign