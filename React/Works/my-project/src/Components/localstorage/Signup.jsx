import React from 'react'
import './Signup.css'
import logo from './assets/logo.png'

const Signup = () => {
  return (
    <div>
        <div class="container">
        <div class="logo">
            <img src={logo} alt="Logo"/>
            
        </div>
        <div class="title">
            <h1>Signup</h1>
        </div>
        <div class="form">
            <form action="#" method="POST">
                <div class="input-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required/>
                </div>
                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required/>
                </div>
                <div class="input-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required/>
                </div>
                <div class="input-group">
                    <label for="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" name="confirm-password"
                        placeholder="Confirm your password" required/>
                </div>
                <div class="button-group">
                    <button type="submit">Sign Up</button>
                </div><br/>
                <div class="link-group">
                    <a href="login.html">Already have an account? Log in</a>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Signup