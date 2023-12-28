// Chat.js

import React, { useEffect, useState } from 'react';
import './Chat.css';
import { getUsers, userChats } from '../ApiCalls';

const Chat = () => {
    const [state, setState] = useState([]);
    const [data, setData] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);


    console.log(data);
    console.log(state);


    useEffect(() => {
        async function fetchData() {
            try {
                const allusers = await getUsers();
                setData(allusers);
                const apiData = await userChats();
                setState(apiData);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const secondMembers = state.map(item => item.members[1]);
    console.log('-------------------',secondMembers);





    const handleUserClick = (user) => {
        setSelectedUser(user);
        // You may want to load chat history or perform other actions here
    };

    return (
        <div className="chat-container">
            <div className="users-list">
                <h2>Users</h2>
                {state.map((user) => (
                    <div key={user._id} className={`user-item ${selectedUser && selectedUser._id === user._id ? 'active-user' : ''}`} onClick={() => handleUserClick(user)}>
                        <p>{user._id}</p>
                    </div>
                ))}
            </div>
            <div className="chat-main">
                <h2>{selectedUser ? `Chatting with ${selectedUser.uname}` : 'Select a user to start chatting'}</h2>
                {/* Add your chat components here */}





            </div>
        </div>
    );
};

export default Chat;
