// Chat.js

import React, { useEffect, useState } from 'react';
import './Chat.css';
import { getUsers } from '../ApiCalls';

const Chat = () => {
  const [state, setState] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [dummyChats, setDummyChats] = useState([]);

  useEffect(() => {
    async function display() {
      try {
        const allusers = await getUsers();
        setState(allusers);
      } catch (error) {
        console.log(error);
      }
    }
    display();
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    // You may want to load chat history or perform other actions here
    // For now, let's set some dummy chats
    setDummyChats([
      { sender: 'user1', message: 'Hello there!' },
      { sender: 'user2', message: 'Hi! How are you?' },
      { sender: 'user1', message: "I'm doing well, thanks!"},
      // Add more dummy chats as needed
    ]);
  };

  return (
    <div className="chat-container">
      <div className="users-list">
        <h2>Users</h2>
        {state.map((user) => (
          <div
            key={user._id}
            className={`user-item ${selectedUser && selectedUser._id === user._id ? 'active-user' : ''}`}
            onClick={() => handleUserClick(user)}
          >
            {user.uname}
          </div>
        ))}
      </div>
      <div className="chat-main">
        <h2>{selectedUser ? `Chatting with ${selectedUser.uname}` : 'Select a user to start chatting'}</h2>
        <div className="chat-history">
          {dummyChats.map((chat, index) => (
            <div key={index} className={`chat-message ${chat.sender === 'user1' ? 'user1' : 'user2'}`}>
              <strong>{chat.sender}:</strong> {chat.message}
            </div>
          ))}
        </div>
        {/* Add your chat input component here */}
      </div>
    </div>
  );
};

export default Chat;
