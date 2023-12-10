import React, { useState } from 'react';
import './SendNotification.css';
import { LuBellPlus } from 'react-icons/lu';

const SendNotification = () => {
  const [notification, setNotification] = useState('');

  const handleTextareaChange = (event) => {
    setNotification(event.target.value);
  };

  const handleSendClick = () => {
    console.log('Notification data:', notification);
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
            <textarea name="notification" cols="30" rows="10" value={notification} onChange={handleTextareaChange} ></textarea>
          </div>
          <button onClick={handleSendClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default SendNotification;
