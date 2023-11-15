import React, { useEffect, useState } from 'react'
import './signup.css'
import axios from 'axios'

const Display = () => {

    const [state, setstate] = useState([]);
    useEffect(() => {
        async function display() {
            const res = await axios.get('http://localhost:7000/alldata')
            console.log(res.data);
            setstate(res.data)
        }
        display()
    }, [])
    console.log('State data', state);
    return (
        <div>
            <div className='signup-wraper'>
                <div className="signup-message">
                    please use a larger display size
                </div>
                <div className="signup-box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className='signup-container'>
                    <div className='signup-form-container'>
                        <div>
                            <ul>
                                {state.map((user) => (
                                    <li key={user.id}>
                                        <div>
                                            <span>{user._id}</span>
                                        </div>
                                        <div>
                                            <span>{user.firstname}</span><span> </span>
                                            <span>{user.lastname}</span>
                                        </div>
                                        <div>
                                            <span>{user.dob}</span>
                                        </div>
                                        <div>
                                            <span>{user.email}</span>
                                        </div>
                                        <div>
                                            <span>{user.phone}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Display