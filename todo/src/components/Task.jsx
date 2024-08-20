import React from 'react'
import './Task.css'

const Task = ({Title,Description,index,deleteTask}) => {

  return (
    <div className='Task'>
    <div><p>{Title}</p>
    <span>{Description}</span>
    </div>
    <button onClick={()=>deleteTask(index)}>-</button>
    </div>
  )
}


export default Task