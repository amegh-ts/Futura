import React, { useState } from 'react';
import './SendNotification.css';
import { LuBellPlus } from 'react-icons/lu';
import { sendNotification } from '../../ApiCalls';

const SendNotification = () => {
  const [notification, setNotification] = useState('');
  const [priority, setPriority] = useState('Common Message');

  const handleTextareaChange = (event) => {
    setNotification(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleSendClick = async () => {
    console.log('Notification data:', notification);
    try {
      await sendNotification({ notification, priority })
    } catch (error) {
      console.log(error);
    }
    alert("Message sent successfully")
  };

  return (
    <div>
      <div className="send-notification-main">
        <div className="send-notification-header">
          <LuBellPlus className="bell-plus-icon" />
          <h3>Notification</h3>
        </div>
        <div className="send-notification-body">
          <div>
            <select value={priority} onChange={handlePriorityChange}>
              <option value="not-so-much">Common Message</option>
              <option value="low">Low Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="high">High Priority</option>
            </select>
          </div>
          <div>
            <textarea name="notification" cols="30" rows="10" value={notification} onChange={handleTextareaChange} ></textarea>
          </div>
          <div>
            <button onClick={handleSendClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendNotification;
