// Chat.js

import React, { useEffect, useState } from 'react';
import './Chat.css';
import { getUsers, userChats } from '../ApiCalls';
import ChatBody from './ChatBody';

const Chat = () => {
    const [state, setState] = useState([]);
    const [data, setData] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showChatBody, setShowChatBody] = useState(false);

    const storedData = localStorage.getItem('persist:unknown');
    const user = storedData ? JSON.parse(JSON.parse(storedData).user) : null;
    const senderId = user?.userInfo?.[0]?.id;

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

    // const secondMembers = state.map(item => item.members[1]);
    // console.log('-------------------', secondMembers);

    const handleUserClick = (user) => {
        setSelectedUser(user);
        setShowChatBody(true);
    };

    return (
        <div className="chat-container">
            <div className="users-list">
                <h2>Users</h2>
                {state.map((user) => {
                    const secondMemberId = user.members[1];
                    const secondMember = data.find((userData) => userData._id === secondMemberId);

                    const firstMemberId = user.members[0];
                    const firstMember = data.find((userData) => userData._id === firstMemberId);

                    const displayMember = secondMemberId === senderId ? firstMember : secondMember;

                    return (
                        <div key={user._id} className={`user-item ${selectedUser && selectedUser._id === user._id ? 'active-user' : ''}`} onClick={() => handleUserClick(user)}>
                            <p>{displayMember ? displayMember.uname : 'Unknown User'}</p>
                        </div>
                    );
                })}
            </div>
            <div className="chat-main">
                {showChatBody ? (
                    <ChatBody selectedChatId={selectedUser._id} />
                ) : (
                    <img src="/Images/robot.gif" alt="" />
                )}
            </div>
        </div>
    );
};

export default Chat;