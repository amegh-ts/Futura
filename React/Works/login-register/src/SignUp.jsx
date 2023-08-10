import React from 'react'
import './Login.css';
import { GiAbstract023 } from "react-icons/gi";
import { FcGoogle } from "react-icons/fc";
import welcomelogo from './assets/welcome.jpg';

function SignUp() {
  return (
    <div className='main'>
        
        <div className='topspace'></div>
        <div className='content_main'>
            <div className='content1'>
                <div className='header'>
                    <h3><GiAbstract023/>Hello There</h3>
                </div>
                <div className='content1_contents'>
                    <h3>Welcome</h3>
                    {/* <button className='gbutton'><FcGoogle className="gicon"/>Login with your Google</button> */}
                    <div className='forms'>
                        <input type="text" placeholder='First Name'/>
                        <input type="text" placeholder='Last Name'/>
                        <input type="Email" placeholder='Email'/>
                        <input type="password" placeholder='Password'/>
                        <input type="password" placeholder='Confirm Password'/>
                    </div>
                    <button className='lg_button'>SignUp</button>
                </div>
                <div className='foot'>
                    <p>Alredy have an account ? <a href="#">Login</a></p>
                </div>
            </div>
            <div className='content2'>
                <img className='login_img' src={welcomelogo} alt="" />
            </div>
            
        </div>
    </div>
  )
}

export default SignUp