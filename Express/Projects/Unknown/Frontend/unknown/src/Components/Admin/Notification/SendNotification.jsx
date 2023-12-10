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
      </div>
    </div>
  )
}

export default SendNotification