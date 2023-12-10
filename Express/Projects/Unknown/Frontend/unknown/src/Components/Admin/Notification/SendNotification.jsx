import React from 'react'
import './SendNotification.css'
import { LuBellPlus } from "react-icons/lu";

const SendNotification = () => {
  return (
    <div>
      <div className="send-notification-main">
        <div className='send-notification-header'>
          <LuBellPlus className='bell-plus-icon' />
          <h3>Notification</h3>
        </div>
        <div className="send-notification-body">
          <div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <button>send</button>
        </div>
      </div>
    </div>
  )
}

export default SendNotification