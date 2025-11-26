import React, { useState } from 'react'
import './theme.css'
function Theme() {
    const [theme,setTheme]=useState('light')
    const changeTheme=()=>{
        setTheme(theme==="light"?"dark":"light")
    }
  return (
    <div>
      <div className={`box ${theme}`}>
        <h3>Theme: {theme}</h3>
        
      </div>
      <button onClick={changeTheme}>change theme</button>

    </div>
  )
}

export default Theme
