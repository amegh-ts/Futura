import React, { useEffect, useState } from 'react'
import './Notification.css'
import { CiBellOn } from "react-icons/ci";
import { getNotification } from '../../ApiCalls';


const Notification = () => {
  const [state, setState] = useState([]);

  useEffect(()=>{
    async function display() {
      setState(getNotification)
    }
    display()
  },[])
console.log(state);
  return (
    <div>
      <div className="notification-main">
        <div className='notification-header'>
          <CiBellOn className='bell-icon' />
          <h3>Notification</h3>
        </div>
        <div className='notification-container'>
          <div className="notification-box">
            <div className="ntb-content">
              <h5>Admin</h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, voluptas?</p>
              <h6>Date</h6>
            </div>
          </div>
          <div className="notification-box">
            <div className="ntb-content">
              <h5>Admin</h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, voluptas?</p>
              <h6>Date</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notification