import React, { useState } from 'react'

const Input = () => {
    const [todo ,setTodo]=useState("")
   const handleAdd=()=>{
    const todoData={
        todo,
        id:new Date().getSeconds()+todo ,
        isComplted:false
    }
   }
  return (
    <div>
      <input type="text" name="" id="" placeholder='enter your task' onChange={(e)=>setTodo(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Input
