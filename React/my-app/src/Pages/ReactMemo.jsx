import React, { useCallback, useState } from 'react'
import {MemoChild} from './Child2'
function ReactMemo() {
    const [state,setState]=useState(0)
    const [state1,setState1]=useState(0)
    console.log('parent rendered');
    function show(){
        setState(state+1)
    }
    function show1(){
        setState1(state1+1)
    }
    const HandleClick=()=>{}
    const MemorizedClick=useCallback(HandleClick,[])
  return (
    <div>
        <h2>state: {state}</h2>
        <h2>state 1: {state1}</h2>
        <button onClick={show}>click1</button>
        <button onClick={show1}>click2</button>
        <MemoChild value={MemorizedClick}/>
    </div>
  )
}

export default ReactMemo