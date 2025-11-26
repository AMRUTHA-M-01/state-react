import React,{useState} from 'react'

function Toggle() {
    const[item,setItem]=useState();
    const showText=()=>{
        setItem("hello");
    }
    const hideText=()=>{
        setItem();
    }

  return (
    <div>
        <h1>{item}</h1>
        <button onClick={showText}>show</button>
        <button onClick={hideText}>Hide</button>

    </div>
  )
}

export default Toggle
