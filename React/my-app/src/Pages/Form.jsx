import React, { useState } from 'react'

const Form = () => {
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [tel,setTel]=useState()

    const display =(e)=>{
        console.log(name)
        console.log(email)
        console.log(password)
        console.log(tel)
    }
  return (
    <div>
        <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <input type="tel" placeholder='Phone' value={tel} onChange={(e)=>setTel(e.target.value)}/>
        <button onClick={display}>Submit</button>
    </div>
  )
}

export default Form