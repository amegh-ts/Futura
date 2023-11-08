import React from 'react'
import { useState } from 'react'
import { signUpData } from './apiCall'
import './signup.css'

const Signup = () => {

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [dob, setDob] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const display = () => {
        signUpData({ firstname, lastname, dob, email, phone, password })
    }
    return (
        <div>
            <div className='signup-wraper'>
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
                        <h2>SignUp</h2>
                        <div className='signup-forms'>
                            <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                            <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='signup-button'>
                            <button onClick={display}>SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Signup