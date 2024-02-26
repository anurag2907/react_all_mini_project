import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from  './Component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>

    <h1 className="text-3xl font-bold underline">
      telvind props project 
    </h1>
    <Card  username ="deepika "  btntext =" press button"/>
    <Card  username ="katrina  " btntext ="click me" />
    <Card  username ="rekha "    btntext ="daba de bhai"/>
    
    </>
     
  )
}

export default App
