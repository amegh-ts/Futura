import React from 'react'
import './Login.css'

const SignUp = () => {
    return (
        <body>
            <div className="signUp-main">
                <div className='signUp-container'>
                    <h1>SignUp</h1>
                    <div className='signUp-form'>
                        <div className="signUp-input-group">
                            <input type="text" placeholder='First Name'/>
                        </div>
                        <div className="signUp-input-group">
                            <input type="text" placeholder='Last Name'/>
                        </div>
                        <div className="signUp-input-group">
                            <input type="text" placeholder='DOB'/>
                        </div>
                        <div className="signUp-input-group">
                            <input type="text" placeholder='Email'/>
                        </div>
                        <div className="signUp-input-group">
                            <input type="password" placeholder='Password'/>
                        </div>
                        <div className="signUp-input-group">
                            <input type="password" placeholder='Confirm Password'/>
                        </div>
                        <div>
                            <button>SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default SignUp