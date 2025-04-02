import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardContainer from './component/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='bg-green-400 text-white p-4 '>Hi Amol Chai piyoge</h1> */}
      <CardContainer user_name="Amol"/><br />
      <CardContainer user_name="Banti"/><br />
      <CardContainer user_name="Banti"/><br />
      <CardContainer user_name="Banti"/><br />
      <CardContainer user_name="Banti"/><br />
      
    </>
  )
}

export default App
