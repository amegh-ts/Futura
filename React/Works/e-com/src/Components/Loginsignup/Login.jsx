import React, { useState } from 'react'
import './login.css'
import { userapi } from './user';
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/authredux';
import Loading from '../Loading';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const dispatch = useDispatch(); 

    const handleLogin = () => {
        // Replace this with your API database check
        const user = userapi.find((user) => (user.email === email || user.username === email) && user.password === password);

        if (user) {
            dispatch(login(user));

            setLoggedIn(true); // Set the login state to true
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    if (loggedIn) {
        return <Loading />; // Render the Loading component when loggedIn is true
      }
    return (
        <div>

            <div className='login-main'> 
                <div className='login-card'>
                    <h2>LOGIN</h2>
                    <p>Please enter your login and password!</p>
                    <div className='login-inputs'>
                        <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} onKeyPress={(e)=>{
                            if(e.key==='Enter'){
                                handleLogin();
                            }
                        }}/>
                        <p>Forgot Password?</p>

                    </div>
                    <div>
                        <button className='login-button' onClick={handleLogin}>LOGIN</button>
                    </div>
                    <div className='login-icons'>
                        <i className="fa-brands fa-facebook-f fa-beat"></i>
                        <i className="fa-brands fa-twitter fa-beat"></i>
                        <i className="fa-brands fa-instagram fa-beat"></i>
                        <i className="fa-brands fa-google fa-beat"></i>

                    </div>
                    <div>
                        <span>Dont have an account? <span>Sign Up</span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login