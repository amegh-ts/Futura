import React from 'react';
import './Signup.css';
import logo from './assets/logo.png';
import { useDispatch } from 'react-redux';
import { formdatas } from '../../Redux/localstore';

const Signup = () => {
    const dispatch = useDispatch();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const formData = {
            name,
            email,
            password
        };

        dispatch(formdatas(formData));

        console.log('Form data submitted:', formData);
    };
    const handleClearLocalStorage = () => {
        localStorage.clear();
        console.log('Local storage cleared.');
      };
    return (
        <div>
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="title">
                    <h1>Signup</h1>
                </div>
                <div className="form">
                    <form onSubmit={handleFormSubmit}>
                        <div className="input-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" required />
                        </div>
                        <div className="input-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" required />
                        </div>
                        <div className="input-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="Enter your password" required />
                        </div>
                        <div className="input-group">
                            <label for="confirm-password">Confirm Password</label>
                            <input type="password" id="confirm-password" name="confirm-password"
                                placeholder="Confirm your password" required />
                        </div>
                        <div className="button-group">
                            <button type="submit">Sign Up</button>
                        </div><br />
                        <div className="link-group">
                            <a href="login.html">Already have an account? Log in</a>
                        </div>
                        <div className='button-group'>
                        <button onClick={handleClearLocalStorage}>Clear Local Storage</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;



