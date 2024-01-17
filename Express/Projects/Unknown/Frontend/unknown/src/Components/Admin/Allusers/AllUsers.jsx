import React, { useEffect, useState } from 'react'
import './AllUsers.css'
import { GrGroup } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { createChat, getUsers } from '../../ApiCalls';

const AllUsers = ({setActivePageToChats}) => {
    const [state, setState] = useState([])
    const storedData = localStorage.getItem('persist:unknown');
    const user = storedData ? JSON.parse(JSON.parse(storedData).user) : null;
    const userId = user?.userInfo?.[0]?.id;

    useEffect(() => {
        async function display() {
            try {
                const allUsers = await getUsers();
                const filteredUsers = allUsers.filter(user => user._id !== userId);

                setState(filteredUsers)
            } catch (error) {
                console.log(error);
            }
        }
        display()

    }, [])

    const handleChatButtonClick = async (firstId, secondId) => {
        try {
          await createChat({ firstId, secondId });
          setActivePageToChats();
        } catch (error) {
          console.log(error);
        }
      };




    // Inside the AllUsers component's return statement
    return (
        <div className="all-users-main">
            <div className="al-users-header">
                <div className='all-users-title'>
                    <GrGroup className='users-icon' />
                    <h3>Users</h3>
                </div>
                <div className='all-users-input'>
                    <input type="text" />
                    <IoSearch />
                </div>
            </div>
            <div className="table-container">
                <table className="all-users-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.map((user, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="user-cards-img">
                                        <img src='/Images/p1.png' alt="" />
                                    </div>
                                </td>
                                <td>{user.uname}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.type}</td>
                                <td>
                                    <button>Edit</button>
                                    <span> </span>
                                    <button onClick={() => handleChatButtonClick(userId, user._id)}>Chat</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );


}

export default AllUsers