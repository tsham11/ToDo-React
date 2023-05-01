import React, {useState, useEffect} from 'react';
import './list.css';
import img from './done.svg';
import image from './delete_forever.svg';
import ReactDOM from 'react-dom/client';


function List() {
    const myname = localStorage.getItem('name');

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    useEffect(()=>{
        if(localStorage.getItem("localTasks")){
            const storedList = JSON.parse(localStorage.getItem("localTasks"));
            setTasks(storedList);
        }
    },[])

    const addTask = (e) => {
        if (task) {
        const newTask = { id: new Date().getTime().toString(), title: task };
        setTasks([...tasks, newTask]);
        localStorage.setItem("localTasks", JSON.stringify([...tasks, newTask]));
        setTask("");
        }
    };

    const handleDelete = (task)=>{
        const deleted = tasks.filter((t)=>t.id !== task.id);
        setTasks(deleted);
        localStorage.setItem("localTasks", JSON.stringify(deleted))
    }
    
    

    const changeStyles = () => {
    let element = document.getElementById('#changeid')
    ReactDOM.findDOMNode(element).style.backgroundColor = this.state.isClicked?'black' : 'white'
}

return (
    <div className='listdiv'>
        <header className='head'>
            <h1 className='todo'>TO DO</h1>
            <h2 id='getname' className='list-name'>{myname}</h2>    
            <div className='circlemin'>
            </div>
        </header>
        <form className='list-item-body'>
            <h1 className='daily'>Add Your Daily Tasks</h1>
            <div className="mytsk-btn-div">
                <div className='my-task'>
                    <input className='inpt-s' id='intp' type="text" placeholder='my task' value={task} onChange={(e)=>setTask(e.target.value)} contentEditable/> 
                    <button className='add-btn' id='add-butn' onClick={addTask}>Add</button>
                </div>
                </div>
                {tasks.map((task) => (
                    <React.Fragment key={task.id}>
                    <div className='ts'>
                    <span className='list-cont'>{task.title}</span>
                    <div className='xy'>
                    <button id="changeid" onClick={changeStyles}><img alt='img' src={img}/></button>
                    <button onClick ={()=> handleDelete(task)}><img alt='img' src={image}/></button>
                    </div>
                    </div>
                    </React.Fragment>
                ))}
            
        </form>

    </div>
)
}

export default List