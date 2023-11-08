import React, { useEffect, useRef, useState } from 'react';
import './Test.css';

const Test = () => {
  const [usename,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const display=()=>{
    
  }
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
                    <form>
                        <div className='test-signup'>
                            <h2>SignUp</h2>
                            <div>
                                <input type="text" placeholder='Username' value={usename} onChange={(e)=>setUsername(e.target.value)}/>
                            </div>
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
