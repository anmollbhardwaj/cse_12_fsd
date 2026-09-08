import React, { useState } from 'react'

function ReactHook() {
 const [counter,setCounter]=useState(100);

 function increseCounter(){
    // alert('Hiii');
    setCounter(counter+10);
 }
 
    return (
    <div>
        <h2 style={{color:'brown'}}>Working on ReactHook </h2>
        <h1>Counter Value={counter}</h1>
        <button onClick={increseCounter}>IncreseCounterValue</button>
        
        </div>
  )
}

export default ReactHook