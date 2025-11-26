import React, { useState } from 'react'

function Character() {
    const [text,setText]=useState("");
    const changeText=(e)=>{
        setText(e.target.value)
    }
  return (
    <div>
      <textarea  onChange={changeText}>{text}</textarea>
      <h2>characters:{text.length}</h2>
    </div>
  )
}

export default Character
