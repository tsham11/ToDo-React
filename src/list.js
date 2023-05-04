import React, {useState, useEffect } from 'react';
import './list.css';
import img from './done.svg';
import image from './delete_forever.svg';
import { v4 as uuidv4 } from 'uuid';


function List() {
    // for grabbing name
    const myname = localStorage.getItem('name');
    // for grabbing image
    const imageSrc = localStorage.getItem('file-upload');
    // for to do list
    const [taskInpt, setTaskInpt] = useState("");
    const [tasksTodo, setTasksTodo] = useState([]);
    

    useEffect(()=>{
        if(localStorage.getItem("localTasks")){
            const storedList = JSON.parse(localStorage.getItem("localTasks"));
            setTasksTodo(storedList);
        }
    },[])
    // for adding list item
    const addTask = (e) => {
        if (taskInpt) {
        const newTask = {completed: false, id: uuidv4(), title: taskInpt };
        setTasksTodo([...tasksTodo, newTask]);
        localStorage.setItem("localTasks", JSON.stringify([...tasksTodo, newTask]));
        setTaskInpt("");
            console.log('taskInpt.id:', taskInpt.id);

        }
    };
    // for deleting list item
    const handleDelete = (task)=>{
        const deleted = tasksTodo.filter((t)=>t.id !== task.id);
        setTasksTodo(deleted);
        localStorage.setItem("localTasks", JSON.stringify(deleted))
    }
    // hanling complete button
    const handleComplete = () => {
        const check = tasksTodo.map((item) =>{
            if(item.id === taskInpt.id){
                return{
                    ...item , completeed: !tasksTodo.completeed
                }
            }
         return item
        });
        setTasksTodo(check);
    }

    // localTasks
  

    // LIST ITEM DESIGN
        const btn = document.getElementById('#changeid');
        const lst = document.getElementById('#list-ts');
        let index = 0;

        const colors = ["rgba(0, 0, 0, 0.7)" , "black"];
    if (btn) {
        btn.addEventListener('click', function onClick() {
        lst.style.backgroundColor = colors[index];

        index = index >= colors.length - 1 ? 0 : index + 1;
        });

    };
   

return (
    <div className='listdiv'>
        <header className='head'>
            <h1 className='todo'>TO DO</h1>
            <h2 id='getname' className='list-name'>{myname}</h2>    
            <div className='circlemin'>
                <img className='prof-pic' id='prof-pic' src={imageSrc} alt="profile pic" />
            </div>
        </header>
        <form className='list-item-body'>
            <h1 className='daily'>Add Your Daily Tasks</h1>
            <div className="mytsk-btn-div">
                <div className='my-task'>
                    <input className='inpt-s' id='intp' type="text" placeholder='my task' value={taskInpt} onChange={(e)=>setTaskInpt(e.target.value)} contentEditable/> 
                    <button className='add-btn' id='add-butn' type="button"  onClick={addTask}>Add</button>
                </div>
                </div>
                {tasksTodo.map((task) => (
                    <React.Fragment key={task.id} >
                    <div  id='list-ts' className='ts'  > 
                    <span className='list-cont' >{task.title}</span>
                    <div className='xy'>
                    <button id="changeid"  type="button" onClick={handleComplete}  ><img alt='img' src={img}/></button>
                    <button id='deleteid'  type="button" onClick ={()=> handleDelete(task)}><img alt='img' src={image}/></button>
                    </div>
                    </div>
                    </React.Fragment>

                    // className='ts'
                ))}
            
        </form>

    </div>
)
}

export default List