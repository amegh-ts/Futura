
import React, { useState } from 'react'
import './Login.css'
import { signUpData } from '../apiCall';

const Login = () => {
  const [isRegisterActive, setRegisterActive] = useState(false);

  const [uname,setUname]=useState('')
  const [dob,setDob]=useState('')
  const [phone,setPhone]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')


  const onSignUpClick =()=>{
    signUpData({uname,dob,phone,email,password})
  }


   


  const toggleForm = () => {
    setRegisterActive(!isRegisterActive);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle your form submission logic here
  };

  return (
    <div>
      <div className='animation-wraper'>
        <div className='animation-box'>
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
        <div>
          <div>

            <div className={`container${isRegisterActive ? ' active' : ''}`}>
              <div className="form-container sign-up">
                <form onSubmit={handleSubmit}>
                  <h1>Create Account</h1>

                  <input type="text" placeholder="Name" value={uname} onChange={(e)=>setUname(e.target.value)}/>
                  <input type="date" placeholder="DOB" value={dob} onChange={(e)=>setDob(e.target.value)}/>
                  <input type="number" placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                  <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                  <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                  <button onClick={onSignUpClick}>Sign Up</button>
                  {/* <div className="social-icons">
                    <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                  </div> */}
                </form>
              </div>
              <div className="form-container sign-in">
                <form onSubmit={handleSubmit}>
                  <h1>Sign In</h1>

                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <a href="#">Forgot Your Password?</a>
                  <button>Sign In</button>
                  {/* <div className="social-icons">
                    <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                  </div> */}
                </form>
              </div>
              <div className="toggle-container">
                <div className="toggle">
                  <div className={`toggle-panel toggle-left${isRegisterActive ? ' active' : ''}`}>
                    <h1>Welcome Back!</h1>
                    <p>Enter your personal details to use all site features</p>
                    <button onClick={toggleForm} className={isRegisterActive ? 'hidden' : ''}>Sign In</button>
                  </div>
                  <div className={`toggle-panel toggle-right${isRegisterActive ? '' : ' active'}`}>
                    <h1>Hello, Friend!</h1>
                    <p>Register with your personal details to use all site features</p>
                    <button onClick={toggleForm} className={isRegisterActive ? '' : 'hidden'}>Sign Up</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login