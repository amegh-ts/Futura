import React from 'react'
import './AllUsers.css'
import { GrGroup } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";


const AllUsers = () => {
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
                <div className="al-users-body">
                    <div className="user-cards">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllUsers