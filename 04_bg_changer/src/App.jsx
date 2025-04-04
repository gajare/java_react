import { useState } from 'react'
import './App.css'

function App() {
  const [color1, setColor] = useState('green')

  return (
    <>
      <div className="w-screen h-screen duration-200 overflow-hidden flex justify-center items-center" style={{ backgroundColor: color1 }}>
        
        <div className="fixed bottom-12 w-full flex justify-center">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl max-w-full">
            <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "red" }}>red</button>
            <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "green" }}>green</button>
            <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "blue" }}>blue</button>
            <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{ backgroundColor: "yellow" }}>yellow</button>
            <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "purple" }}>purple</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
