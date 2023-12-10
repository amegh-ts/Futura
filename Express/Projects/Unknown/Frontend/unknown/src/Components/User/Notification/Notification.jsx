import React, { useEffect, useState } from 'react'
import './Notification.css'
import { CiBellOn } from "react-icons/ci";
import { getNotification } from '../../ApiCalls';


const Notification = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    async function display() {
      const notifications = await getNotification();
      setState(notifications);
    }
    display()

  }, [])
  console.log('state data', state);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'high-priority';
      case 'medium':
        return 'medium-priority';
      case 'low':
        return 'low-priority';
      default:
        return '';
    };
  };

  return (
    <div>
      <div className="notification-main">
        <div className='notification-header'>
          <CiBellOn className='bell-icon' />
          <h3>Admin Notification</h3>
        </div>
        <div className='notification-container'>
          {state &&
            state.map((notification) => (
              <div className={`notification-box ${getPriorityColor(notification.priority)}`}key={notification._id}>
                <div className="ntb-content">
                  {/* <h5>{notification.user}</h5> */}
                  <h6>  {new Date(notification.createdAt).toLocaleString()}</h6>
                  <p>{notification.notification}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Notification