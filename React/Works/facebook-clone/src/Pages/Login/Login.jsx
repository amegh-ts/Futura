import React from "react";
import './Login.css'
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="login-main">
            <div className="login-top">
                <div className="login-top-left">
                    <span className="fb-logo">facebook</span>
                    <span className="fb-p">Facebook helps you connect and share <br /> with the people in your life.</span>
                </div>
                <div className="login-top-right">
                    <div className="login-container">
                        <div className="login-container-top">
                            <input type="text" placeholder="Email address or phone number" />
                            <input type="password" placeholder="Password" />
                            <div>
                                <button>Log in</button>
                            </div>
                            <Link to={'/forgot'}>
                                <span className="forgotten-pass">Forgotten password?</span>
                            </Link>

                        </div>
                        <div className="login-container-bottom">
                            <Link to={'/signup'}>
                                <button>Create new account</button>

                            </Link>
                        </div>
                    </div>
                    <span>Create a Page for a celebrity, brand or business.</span>
                </div>
            </div>
            <div className="login-bottom">
                <div className="login-bottom-top">
                    <ul>
                        <li>English</li>
                        <li>മലയാളം</li>
                        <li>தமிழ்</li>
                        <li>ಕನ್ನಡ</li>
                        <li>हिन्दी</li>
                        <li>اردو</li>
                        <li>বাংলা</li>
                        <li>తెలుగు</li>
                        <li>Español</li>
                        <li>Português (Brasil)</li>
                        <li>Français (France)</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Login;
