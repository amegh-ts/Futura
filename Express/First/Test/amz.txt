import React, { useEffect, useRef, useState } from 'react';
import './Test.css';

const Test = () => {
    const [formData, setFormData] = useState({
        fn: '',
        ln: '',
        eml: '',
        no: '',
        pss: '',
        confirmPss: ''
    });

    const fname = useRef();
    const lname = useRef();
    const email = useRef();
    const num = useRef();
    const pass = useRef();
    const confirmPass = useRef();

    const handleSignup = (e) => {
        e.preventDefault();

        // console.log(fname.current.value);
        // console.log(lname.current.value);
        // console.log(email.current.value);
        // console.log(num.current.value);
        // console.log(pass.current.value);

        const newname = fname.current.value;
        const newlname = lname.current.value;
        const newemail = email.current.value;
        const newnum = num.current.value;
        const password = pass.current.value;
        const newpass = confirmPass.current.value;

        setFormData({
            fn: newname,
            ln: newlname,
            eml: newemail,
            no: newnum,
            pss: password,
            confirmPss: newpass
        });


    };
    useEffect(() => {
        console.log(formData);
    }, [formData]);

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
                <div className="test-container">
                    <form onSubmit={handleSignup}>
                        <div className='test-signup'>
                            <h2>SignUp</h2>
                            <input type="text" placeholder="First Name"
                                ref={fname} />
                            <input type="text" placeholder="Last Name"
                                ref={lname} />
                            <input type="email" placeholder="Email"
                                ref={email} />
                            <input type="tel" placeholder="Phone"
                                ref={num} />
                            <input type="password" placeholder="Password"
                                ref={pass} />
                            <input type="password" placeholder="Confirm Password"
                                ref={confirmPass} />
                            <div>
                                <button type="submit">SignUp</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Test;
