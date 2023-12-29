import React, { useState } from 'react';

const ChatBody = ({ selectedChatId }) => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    // Handle sending the message (you can implement this logic)
    console.log(`Sending message: ${message}`);
    // Reset the input field after sending the message
    setMessage('');
  };

  return (
    <div className='chat-body-main'>
      <p>Chat with {selectedChatId}</p>
      <div className="chat-body-container">
        <ul className="message-list">
          <li className="message sender-message">
            <div className="message-bubble">Hello! This is a sender message.</div>
          </li>
          <li className="message receiver-message">
            <div className="message-bubble">Hi! This is a received message.</div>
          </li>
        </ul>
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={handleMessageChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBody;
