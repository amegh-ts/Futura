import React, { useState } from 'react'
import { loginData } from './apiCall'

const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

const login=()=>{
console.log(email,password);
loginData({email,password})
}
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
                        <h2>Login</h2>
                        <div className='sigin-form'>
                            <input type="mail" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="signin-button">
                            <button onClick={login}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn