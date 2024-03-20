import React, { useState } from 'react'
import './App.css';
import ListComponent from './ListComponent';
import List from './List'


const App = () => {
 const [psvalue,setinput]=useState()
 const [list,setlist]=useState(['jo placeholder ma new value ho gi wo new list ho gi '])
 const changehandler=(e)=>{
  setinput(e.target.value)
 }
  // logic ya hy sub sa phaly data psvalue mein hota hy phir psvalue sa data [] mein jata hy
  // spread operatar or psvalue vali line sa 
  const clickhandler=()=>{
        // setlist([...list,psvalue])
        // console.log(list)
        //this alternative of top comted two lines code
        setlist((list)=>{ 
          const team=[...list,psvalue]
          console.log(team)
          setinput('')
          return team
       
  })}
  return (
    <div>
       <div className='container'>
        <div className='header'>TodoList</div>
        <input type='text' placeholder='Add Activity' value={psvalue} onChange={changehandler} /> 
         <button onClick={clickhandler}>Add</button>
        <p className='List-heading'>Here is your list : {')'}</p>
        {list.map((val,i)=>{
          return(
            <>
            <p>

            <div className='listData'>{val}</div>
            </p>
           
            </>
          )
        })} 
        
        </div>
        {/* <ListComponent/> */}
        <List/>
        
      
    </div>
  )
}

export default App
