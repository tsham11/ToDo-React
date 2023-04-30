import React from 'react';
import './list.css';
function list() {
   
    const myname = localStorage.getItem('name');
        
return (
    <div className='listdiv'>
        <header className='head'>
            <h1 className='todo'>TO DO</h1>
            <h2 id='getname' className='list-name'>{myname}</h2>    
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