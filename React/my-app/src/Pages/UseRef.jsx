import React from 'react'
import { useRef } from 'react'

function UseRef() {
    const Sampleref=useRef()
    const show=()=>{
        Sampleref.current.style.backgroundColor='red'
    }
  return (
    <div ref={Sampleref}>
        <h1>helloo</h1>
        <button onClick={show}>click</button>
    </div>
  )
}

export default UseRef