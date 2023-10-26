import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Buy = () => {
  const navigate=useNavigate()

  useEffect(()=>{
    const redirectToHome=()=>{
      setTimeout(()=>{
        navigate('/home')
      },2000)
    }
    redirectToHome();
  },[navigate]);
  
  return (
    <div className='buy-main'>
      <div className="message-container">
        <p className="message">Item Purchased <br/>Successfully</p>
      </div>
    </div>
  )
}

export default Buy