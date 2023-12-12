import React, { useEffect, useState } from 'react'
import './AllUsers.css'
import { GrGroup } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { getUsers } from '../../ApiCalls';

const AllUsers = () => {
    const [state, setState] = useState([])

    useEffect(() => {
        async function display() {
            try {
                const allusers = await getUsers();
                setState(allusers)
                console.log(state);
            } catch (error) {
                console.log(error);
            }
        }
        display()

    }, [getUsers])

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
                            <button>edit</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

}

export default AllUsers