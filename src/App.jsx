import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toggle from './components/Toggle'
// import Sample from './components/sample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Sample /> */}
      <Toggle />
    </>
  )
}

export default App
