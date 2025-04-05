 import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length,setlength]=useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState("")
  //use ref
  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str+="0123456789"
    }
    if (charAllowed) {
      str+="!@#$%^&*"
    }
    for (let i = 1; i <= length; i++) {
      let char =Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
      console.log(pass);
            
    }

    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])
  
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,setPassword])

  const copypasswordToClipBoard=useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,99)
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-700">
      <h1 className='text-white text-center my-3'>Password Genrator</h1>      
      <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white text-black">
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder="password"
        ref={passwordRef}
        readOnly
        />
        <button 
        onClick={copypasswordToClipBoard}
        className='outline bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
            max={100}
            min={6}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{
              setlength(e.target.value)
            }}
          />
          <label htmlFor="">Legnth:{length}</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=>{
            setNumberAllowed((prev)=>!prev);
          }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllowed}
          id='charInput'
          onChange={()=>{
            setCharAllowed((prev)=>!prev);
          }}
          />
          <label htmlFor="charInput">Charecters</label>
        </div>
      </div>
    </div>
  )
}

export default App