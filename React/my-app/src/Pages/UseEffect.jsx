import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [state,setstate]=useState(0)
    useEffect(()=>{
        console.log('Successful');
    },[])
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=>setstate(state+1)}>click</button>
    </div>
  )
}

export default UseEffect