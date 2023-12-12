import React, { useEffect, useState } from 'react'
import './AllUsers.css'
import { GrGroup } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { getUsers } from '../../ApiCalls';

const AllUsers = () => {
    const [state, setState] = useState(0)

    useEffect(() => {
        async function display() {
          try {
            const allusers = await getUsers();
          setState(allusers.length)
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
                    <div className="user-cards">
                        <div className="user-cards-img">
                            <img src="Images/p1.png" alt="" />
                        </div>
                        <div>
                        <p>Name</p>
                        </div>
                        <div>
                            <p>Email</p>
                        </div>
                        <div>
                            <p>Phone</p>
                        </div>
                        <div>
                            <button>edit</button>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default AllUsers