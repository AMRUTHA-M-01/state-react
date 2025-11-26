import React, {useState} from 'react'

function Sample() {
    
    const [count,setCount]=useState(0);
    const increaseCount=()=>{
        setCount(count+1);
    }
    const decreaseCount=()=>{
        setCount(count-1);
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>+</button>
      
      <button onClick={decreaseCount}>-</button>
      
    </div>
  )
}

export default Sample
