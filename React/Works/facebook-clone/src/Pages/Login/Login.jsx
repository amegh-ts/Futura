import React from "react";
import './Login.css'

const Login = () => {
    return (
        <div className="login-main">
            <div className="login-top">
                <div className="login-top-left">
                    <div>
                        <img src="/Images/fblogo.svg" alt="fb logo" />
                    </div>
                    <h2>Facebook helps you connect and share with the people in your life.</h2>
                </div>
                <div className="login-top-right">
                    <div className="login-container">
                        <div className="login-container-top">
                            <div>
                                <input type="text" />
                            </div>
                            <div>
                                <input type="text" />
                            </div>
                            <div>
                                <button>Log in</button>
                            </div>
                        </div>
                        <div className="login-container-bottom">
                            <button>Create new account</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="login-bottom">
                <ul>
                    <li>English (UK)</li>
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
    );
};

export default Login;
