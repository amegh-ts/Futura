import React from 'react'

const SignIn = () => {
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
                            <input type="mail" placeholder='Email' />
                            <input type="password" placeholder='Password' />
                        </div>
                        <div className="signin-button">
                            <button>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn