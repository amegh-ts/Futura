// Chat.js

import React, { useState } from 'react';
import './Chat.css';

const Chat = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
    // Add more users as needed
  ]);

  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    // You may want to load chat history or perform other actions here
  };

  return (
    <div className="chat-container">
      <div className="users-list">
        <h2>Users</h2>
        {users.map((user) => (
          <div
            key={user.id}
            className={`user-item ${selectedUser && selectedUser.id === user.id ? 'active-user' : ''}`}
            onClick={() => handleUserClick(user)}
          >
            {user.name}
          </div>
        ))}
      </div>
      <div className="chat-main">
        <h2>{selectedUser ? `Chatting with ${selectedUser.name}` : 'Select a user to start chatting'}</h2>
        {/* Add your chat components here */}
      </div>
    </div>
  );
};

export default Chat;
