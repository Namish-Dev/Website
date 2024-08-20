import React, { useEffect, useState } from 'react'
import './content.css'
import Task from './Task'
const Content = () => {

  const initialArray=localStorage.getItem('task')?JSON.parse(localStorage.getItem('task')):[] 

    const [task,setTask]=useState(initialArray)
    const [title,setTitle]=useState()
    const [desc,setDesc]=useState()

    

    const submitHandler=(e)=>{
      e.preventDefault();
      //this is for taking the inputs
      setTask([...task,{title,desc}])
      
      setTitle('')
      setDesc('')
    }

    const deleteTask = (index) => {
      // Create a new array by filtering out the task at the given index
      const filteredArr = task.filter((val, i) => {
        // 'val' represents the current task object in the array
        // 'i' represents the index of the current task object
        // Check if the current index 'i' is not equal to the provided 'index'
        return i !== index;
      });

      setTask(filteredArr)
    }
    
    useEffect(()=>{
      localStorage.setItem('task',JSON.stringify(task));
    },[task])

  return (
    <div className="container">
        <h1>Daily goals</h1>
        <form onSubmit={submitHandler} >
        <input type="text"  placeholder='Title' value={title} onChange={(e)=>(
          setTitle(e.target.value)
        )}/>
        <textarea placeholder='Description' value={desc}
        onChange={(e)=>setDesc(e.target.value)}></textarea>
        <button type='submit'>Add</button>
        </form>

        {task.map((item,index)=>(
          <Task key={index} Title={item.title} Description={item.desc} index={index} deleteTask={deleteTask}/>
        ))}
    </div>
  )
}

export default Content