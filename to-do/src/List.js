import React, { useState } from 'react'
import './App.css';
const List = () => {
  const [cup,setcup]=useState('')
  const [newglass,setnewglass]=useState([])
  const change=(e)=>{
    setcup(e.target.value)
  }
  const click=()=>{
    setnewglass([...newglass,cup])
    setcup('')
  }
    
  return (
   
   <div className='container'>
    <h1>todo list</h1>
    <input type='text' placeholder='add item' value={cup} onChange={change}></input>
    <button onClick={click}>update</button>
    <ul>
      {newglass.map((val,index)=>(
        <li key={index}><p className='listData'>{val}</p></li>
      ))}
    </ul>
    </div>

    
  )
}

export default List