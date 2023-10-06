import React from 'react'
import {useNavigate} from 'react-router-dom'

const UseNavigate1 = () => {
    const navigate=useNavigate()
    // const display=()=>{
    //     navigate('/')
    // }
setTimeout(()=>{
    navigate('/')
},6000)

  return (
    <div>
        <button >click</button>
    </div>
  )
}

export default UseNavigate1