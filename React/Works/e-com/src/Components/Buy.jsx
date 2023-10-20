import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Buy = () => {
    const navigate=useNavigate();

    useEffect(()=>{
        const redirectToHome=()=>{
            setTimeout(()=>{
                navigate('/home')
            },3000)
        }
        redirectToHome();
    },[navigate])
  return (
    <div>B
        hjjhhvhhuy</div>
  )
}

export default Buy