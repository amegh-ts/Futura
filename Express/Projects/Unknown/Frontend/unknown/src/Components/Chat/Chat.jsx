import React, { useState, useEffect } from 'react';
import './Chat.css';
import io from 'socket.io-client';

const Chat = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
    // Add more users as needed
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Connect to the socket server
    const newSocket = io('http://localhost:5000'); // Replace with your server URL
    setSocket(newSocket);

    return () => {
      // Disconnect the socket when the component unmounts
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      // Load previous messages from the server
      socket.on('loadMessages', (loadedMessages) => {
        setMessages(loadedMessages);
      });

      // Handle new incoming messages
      socket.on('newMessage', (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      // Clean up the event listeners when the component unmounts
      return () => {
        socket.off('loadMessages');
        socket.off('newMessage');
      };
    }
  }, [socket]);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    // You may want to load chat history or perform other actions here
  };

  const handleSendMessage = () => {
    if (socket && selectedUser && messageInput.trim() !== '') {
      const data = {
        user: selectedUser.name,
        message: messageInput.trim(),
      };

      // Emit the 'sendMessage' event to the server
      socket.emit('sendMessage', data);

      setMessageInput('');
    }
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
        <div className="message-list">
          {messages.map((message) => (
            <div key={message.id} className="message">
              <strong>{message.user}:</strong> {message.message}
            </div>
          ))}
        </div>
        {selectedUser && (
          <div className="message-input">
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
