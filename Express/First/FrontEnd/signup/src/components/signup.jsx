import React from 'react'
import { useState } from 'react'
import { signUpData } from './apiCall'

const Signup = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const display = () => {
        signUpData({ username, email, password })
    }
    return (
        <div>
            <div>
                <div className='signup-container'>
                    <div className='signup-form-container'>
                        <h2>SignUp</h2>
                        <div>
                            <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                            <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div>
                            <button onClick={display}>SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Signup