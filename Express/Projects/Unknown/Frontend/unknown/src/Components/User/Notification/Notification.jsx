import React from 'react'
import './Notification.css'
import { CiBellOn } from "react-icons/ci";


const Notification = () => {
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