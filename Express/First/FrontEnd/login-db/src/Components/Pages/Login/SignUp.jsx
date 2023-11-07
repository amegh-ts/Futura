import React, { useState } from 'react'
import './SignUp.css'

const Test = () => {
  const [isRegisterActive, setRegisterActive] = useState(false);

  const toggleForm = () => {
    setRegisterActive(!isRegisterActive);
  };

  return (
    <div>
      <div className="wraper">
        <div className="box">
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
                <form>
                  <h1>Create Account</h1>

                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <button>Sign Up</button>
                  <div className="social-icons">
                    <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                  </div>
                </form>
              </div>
              <div className="form-container sign-in">
                <form>
                  <h1>Sign In</h1>

                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <a href="#">Forgot Your Password?</a>
                  <button>Sign In</button>
                  <div className="social-icons">
                    <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                  </div>
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

export default Test