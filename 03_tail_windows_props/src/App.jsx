import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(50)
  // let counter=15
  const addValue=()=>{
    counter=counter+1
    setCounter(counter)
    console.log(counter);
    
  }
  const removeValue=()=>{
    counter=counter-1
    setCounter(counter)
    console.log(counter);
    
  }

  return (
  <>
    <h1>Chai or code</h1>
    <h2>counter value {counter}</h2>
    <button onClick={addValue}>Increment</button>
    <br />
    <br />
    <br />
    <button onClick={removeValue}>Decrement</button>
  </>
  )
}

export default App
