import React, { useEffect, useState } from 'react'
import './Notification.css'
import { CiBellOn } from "react-icons/ci";
import { getNotification } from '../../ApiCalls';


const Notification = () => {
  const [state, setState] = useState([]);

  useEffect(()=>{
    async function display() {
      const notifications = await getNotification();
      setState(notifications);
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
        {state.map((notification) => (
  <div className="notification-box" key={notification._id}>
    <div className="ntb-content">
      <h5>{notification.user}</h5>
      <p>{notification.notification}</p>
      <h6>{notification.priority} - {new Date(notification.createdAt).toLocaleString()}</h6>
    </div>
  </div>
))}
        </div>
      </div>
    </div>
  )
}

export default Notification