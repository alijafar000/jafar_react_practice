import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(10) //hooks implimentation

   const addValue = () =>{
    // setCounter(counter + 1) //agar do setCounter + 1 kar de to dono ek hi batch me ho jayega aur ek hi execute hoga
    // setCounter(counter + 1)
    setCounter(prevCounter => prevCounter + 1) //callback deke karenge to 3 add hoga counter m
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)

   
    if (counter === 20) {
        setCounter(20)
    }
   }

   const removeValue = ()=>{
    setCounter(counter - 1)
    if (counter === 0) {
       setCounter(0)
    }
   }
  return (
    <>
      <h1>Jafar aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button> <br /><br />

      <button onClick={removeValue}>Remove value {counter}</button>
      <p>Footer: {counter}</p>

    </>
  )
}

export default App
