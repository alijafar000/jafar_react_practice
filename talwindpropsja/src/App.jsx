import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './componen/button'


function App() {
  const [count, setCount] = useState(0)
//example for props
  let myObj = {
    username: "Jafar",
    pass: 123456
    }

    let myArr = [1,2,3,4,5,6]


  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl font-bold mb-4'>Talwind CSS Test</h1>
    
       <Button  btnText="Click me!"/> <br />
      <Button  btnText="Visit me!"/> <br />
      <Button/>

      
</>
  )
}

export default App


