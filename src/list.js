import React from 'react'
import './list.css';
function list() {
   
  return (
    <div className='listdiv'>
        <header className='head'>
            <h1 className='todo'>TO DO</h1>
            <h2 className='list-name'>Your Name</h2>    
            <div className='circlemin'>
            
    
            </div>
        </header>
        <div className='list-item-body'>
            <h1 className='daily'>Add Your Daily Tasks</h1>
             
            <div className="mytsk-btn-div">
                <div className='my-task'>
                    <input className='inpt-s' type="text" placeholder='my task' contentEditable/> 
                </div>
                <button className='add-btn' id='add-butn'>Add</button>
            </div>
        </div>
    </div>
  )
}

export default list