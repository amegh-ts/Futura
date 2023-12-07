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
                        <h2>SignUp</h2>
                        <div className='signup-forms'>
                            {/* <form action="" onSubmit={display} encType='multipart/form-data'>  */}
                                <input type="text" placeholder='First Name' value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                                <input type="text" placeholder='Last Name' value={lastname} onChange={(e) => setLastName(e.target.value)} />
                                <input type="date" placeholder='DOB' value={dob} onChange={(e) => setDob(e.target.value)} />
                                <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                <input type="text" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                                <input type="text" placeholder='Password' />
                                <input type="text" placeholder='Confirm Password' value={password} onChange={(e) => setPassword(e.target.value)} />

                                <input type="file" filename='Images' />

                            {/* <input type="submit" value={"submit"}/> */}
                            
                            {/* </form> */}

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