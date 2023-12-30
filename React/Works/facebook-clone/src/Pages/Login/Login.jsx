import React from "react";
import './Login.css'

const Login = () => {
    return (
        <div className="login-main">
            <div className="login-top">
                <div className="login-top-left">
                    <img src="" alt="fb logo" />
                    <p>
                        Facebook helps you connect and share with the people in your life.
                    </p>
                </div>
                <div className="login-top-right">
                    <div className="login-container">
                        <input type="text" />
                    </div>
                </div>
            </div>
            <div className="login-bottom">


                <ul>
                    <li>English (UK)</li>
                    <li>
                        മലയാളം
                    </li>
                    <li>
                        தமிழ்
                    </li>
                    <li>
                        ಕನ್ನಡ
                    </li>
                    <li>
                        हिन्दी
                    </li>
                    <li>
                        اردو
                    </li>
                    <li>
                        বাংলা
                    </li>
                    <li>
                        తెలుగు
                    </li>
                    <li>
                        Español
                    </li>
                    <li>
                        Português (Brasil)
                    </li>
                    <li>
                        Français (France)
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Login;
