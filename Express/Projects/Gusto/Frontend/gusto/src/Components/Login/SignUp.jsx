import React, { useState } from 'react';
import './Login.css';
import { IoCloseCircleOutline } from 'react-icons/io5';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [toasts, setToasts] = useState([]);

    const handleSignUp = () => {
        if (
            firstName.trim() === '' ||
            lastName.trim() === '' ||
            dob.trim() === '' ||
            email.trim() === '' ||
            password.trim() === '' ||
            confirmPassword.trim() === ''
        ) {
            const newToast = {
                id: Date.now(),
                message: 'Please fill in all fields.',
            };
            setToasts((prevToasts) => [...prevToasts, newToast]);

            setTimeout(() => {
                setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== newToast.id));
            }, 3000); // Set a timeout to remove the toast after 3 seconds
        } else if (password !== confirmPassword) {
            const newToast = {
                id: Date.now(),
                message: 'Passwords do not match.',
            };
            setToasts((prevToasts) => [...prevToasts, newToast]);

            setTimeout(() => {
                setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== newToast.id));
            }, 3000); // Set a timeout to remove the toast after 3 seconds
        } else {
            // Perform your sign-up logic here
        }
    };

    return (
        <body>
            <div className="signup-main">
                <div className="signup-container">
                    <h1>SignUp</h1>
                    <div className="signup-form">
                        <div className="signup-input-group">
                            <input
                                type="text"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="signup-input-group">
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className="signup-input-group">
                            <input
                                type="date"
                                placeholder="DOB"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                            />
                        </div>
                        <div className="signup-input-group">
                            <input
                                type="mail"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="signup-input-group">
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="signup-input-group">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <div className='signup-button'>
                            <button onClick={handleSignUp}>SignUp</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="toast-container">
                {toasts.map((toast) => (
                    <div key={toast.id} className="toast-message">
                        {toast.message}
                        <IoCloseCircleOutline
                            className="toast-close"
                            onClick={() => setToasts((prevToasts) => prevToasts.filter((t) => t.id !== toast.id))}
                        />
                    </div>
                ))}
            </div>
        </body>
    );
};

export default SignUp;
