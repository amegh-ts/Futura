import React, { useState } from 'react'
import { accountRecoverys } from '../ApiCalls'
import './Login.css'

const Recovery = () => {

    const [email, setEmail] = useState('')

    const onSubmit = async () => {
        try {
            accountRecoverys({ email })
            console.log(email);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className='recovery-main'>
                <div>
                    <input type="email" placeholder='enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <button onClick={onSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Recovery