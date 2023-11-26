
import React, { useState } from 'react';
import './Login.css';
import { IoCloseCircleOutline } from "react-icons/io5";


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [toasts, setToasts] = useState([]);

    const handleSignIn = () => {
        if (email.trim() === '' || password.trim() === '') {
            const newToast = {
                id: Date.now(),
                message: 'Please fill in all fields.',
            };
            setToasts((prevToasts) => [...prevToasts, newToast]);

            setTimeout(() => {
                setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== newToast.id));
            }, 3000); // Set a timeout to remove the toast after 3 seconds
        } else {
            // Perform your sign-in logic here
        }
    };

    return (
        <body>
            <div className="signin-main">
                <div className='signin-container'>
                    <h1>SignIn</h1>
                    <div className='signin-form'>
                        <div className="signin-input-group">
                            <input
                                type="text"
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="signin-input-group">
                            <input
                                type="password"
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='signin-button'>
                            <button onClick={handleSignIn}>SignIn</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="toast-container">
                {toasts.map((toast) => (
                    <div key={toast.id} className="toast-message">
                        {toast.message}
                        <IoCloseCircleOutline className='toast-close' onClick={() => setToasts((prevToasts) => prevToasts.filter((t) => t.id !== toast.id))} />
                    </div>
                ))}
            </div>
        </body>
    );
}

export default SignIn;















// import React, { useState } from 'react';
// import './Login.css';

// const SignIn = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSignIn = () => {
//         if (email.trim() === '' || password.trim() === '') {
//             window.alert('Please fill in all fields.');
//         } else {
//             // Perform your sign-in logic here
//         }
//     };

//     return (
//         <body>
//             <div className="signin-main">
//                 <div className='signin-container'>
//                     <h1>SignIn</h1>
//                     <div className='signin-form'>
//                         <div className="signin-input-group">
//                             <input
//                                 type="text"
//                                 placeholder='Email'
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                         </div>
//                         <div className="signin-input-group">
//                             <input
//                                 type="password"
//                                 placeholder='Password'
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                         </div>
//                         <div className='signin-button'>
//                             <button onClick={handleSignIn}>SignIn</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </body>
//     );
// }

// export default SignIn;
