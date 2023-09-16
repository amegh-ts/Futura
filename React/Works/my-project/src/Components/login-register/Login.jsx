import React from 'react';
import './Login.css';
import { GiAbstract023 } from "react-icons/gi";
import { FcGoogle } from "react-icons/fc";
import welcomelogo from './assets/welcome.jpg';

function Login() {
    return (
        <div className='main'>

            <div className='topspace'></div>
            <div className='content_main'>
                <div className='content1'>
                    <div className='header'>
                        <h3><GiAbstract023 />Hello There</h3>
                    </div>
                    <div className='content1_contents'>
                        <h3>Welcome back, Amz</h3>
                        <h4>Welcome back! please enter your details.</h4>
                        <div className='forms'>
                            <input type="Email" placeholder='Email' />
                            <input type="password" placeholder='Password' />
                        </div>
                        <div className='cbx_fgt'>
                            <div className='check'>
                                <input type="checkbox" /><span>Remember me</span>
                            </div>
                            <div>
                                <a href="#">Forget Password</a>
                            </div>
                        </div>
                        <button className='lg_button'>Login</button><br />
                        <button className='gbutton'><FcGoogle className="gicon" />Login with your Google</button>

                    </div>
                    <div className='foot'>
                        <p>Don't have account yet? <a href="#">Signup for free</a></p>
                    </div>
                </div>
                <div className='content2'>
                    <img className='login_img' src={welcomelogo} alt="" />
                </div>

            </div>
        </div>
    );
}

export default Login;
