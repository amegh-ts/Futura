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

    }, [])

    return (
        <div>
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
                <div className="all-users-body">
                    {state.map((user, index) => (
                        <div className="user-cards" key={index}>
                            <div className="user-cards-img">
                                <img src='/Images/' alt="" />
                            </div>
                            <div>
                                <p>{user.uname}</p>
                            </div>
                            <div>
                                <p>{user.email}</p>
                            </div>
                            <div>
                                <p>{user.phone}</p>
                            </div>
                            <div>
                                <p>{user.type}</p>
                            </div>
                            <div>
                                <button>edit</button>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    )
}

export default AllUsers