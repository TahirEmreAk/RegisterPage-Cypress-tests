import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Success from "./components/Success";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login />
    </>
  )
}

export default App
