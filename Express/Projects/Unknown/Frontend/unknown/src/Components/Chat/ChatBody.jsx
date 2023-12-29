import React, { useEffect, useState } from 'react';
import { chatPage } from '../ApiCalls';

const ChatBody = ({ selectedChatId }) => {
  const [messages, setMessages] = useState([]);

  const storedData = localStorage.getItem('persist:unknown');
  const user = storedData ? JSON.parse(JSON.parse(storedData).user) : null;
  const senderId = user?.userInfo?.[0]?.id;

  useEffect(() => {
    async function fetchData() {
      try {
        const getChat = await chatPage(selectedChatId);
        setMessages(getChat || []); 
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [selectedChatId]);

  const handleMessageChange = (e) => {
  };

  const handleSendMessage = () => {
    // Handle sending the message (you can implement this logic)
    // Reset the input field after sending the message
  };

  return (
    <div className='chat-body-main'>
      <p>Chat with {selectedChatId}</p>
      <div className="chat-body-container">
        {messages.length > 0 ? (
          <ul className="message-list">
            {messages.map((msg) => (
              <li
                key={msg._id}
                className={`message ${msg.senderId === senderId ? 'sender-message' : 'receiver-message'}`}
              >
                <div className="message-bubble">{msg.text}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No Conversation yet...</p>
        )}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          onChange={handleMessageChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBody;
