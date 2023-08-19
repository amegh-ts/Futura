import React, { useState } from 'react'
import Child from './Child'
function HookUseState() {
    const [state,setState]=useState(0)
    function display(){
        setState(state+1)
    }
    function reset(){
        setState(0)
    }
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={display}>Click</button>
        <button onClick={reset}>Reset</button>
        <Child valuess={state}/>
    </div>
  )
}

export default HookUseState