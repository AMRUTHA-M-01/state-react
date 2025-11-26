import React,{useState} from 'react'
import './Box.css'
function Box() {
    const [colour,setColor]=useState("")

    const redColor=()=>{
        setColor("red");
    }
    const blueColor=()=>{
        setColor("blue");
    }
    const greenColor=()=>{
        setColor("green");
    }
  return (
    <div>
      <div className={`box ${colour}`}>
      </div>
      <button onClick={redColor}>red</button>
      <button onClick={blueColor}>blue</button>
      <button onClick={greenColor}>green</button>
    </div>
  )
}

export default Box
