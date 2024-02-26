import { useState } from 'react'

import './App.css'

function App() {
    
    let  [count ,setCount]= useState(15)
  // let count = 5;

  const addValue = () => {
    if(count<30){
      setCount(count+1);

    }
       
      
  }

  const removeValue = () => {
    
    if (count>0)
    {
      setCount(count-1);
    }
  }

  return (
    <>
       <h1>hello anurag rishi</h1>
       <h1>counter value : {count} </h1>
       <button onClick={addValue}> add value {count}</button>
       <br />
       <button onClick={removeValue}>remove value{count}</button>
       <p> footer {count}</p>
    </>
  )
}

export default App
