import React from 'react'
import './Login.css'

const SignIn = () => {
    return (
        <body>
            <div className="signin-main">
                <div className='signin-container'>
                    <h1>SignIn</h1>
                    <div className='signin-form'>
                        <div className="signin-input-group">
                            <input type="text" />
                            <label htmlFor="First Name">First Name</label>
                        </div>

                        <div className="signin-input-group">
                            <input type="text" />
                            <label htmlFor="First Name">Last Name</label>
                        </div>

                        <div className="signin-input-group">
                            <input type="text" />
                            <label htmlFor="First Name">DOB</label>
                        </div>

                        <div className="signin-input-group">
                            <input type="text" />
                            <label htmlFor="First Name">Email</label>
                        </div>

                        <div className="signin-input-group">
                            <input type="text" />
                            <label htmlFor="First Name">Password</label>
                        </div>

                        <div className="signin-input-group">
                            <input type="text" />
                            <label htmlFor="First Name">Confirm Password</label>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default SignIn