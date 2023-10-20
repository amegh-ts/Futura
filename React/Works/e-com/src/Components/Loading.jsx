import React, { useEffect } from 'react'
import './Loading.css'
import { useNavigate } from 'react-router-dom';

const Loading = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const redirectToMain = () => {
        setTimeout(() => {
          navigate('/home');
        }, 2000);
      };

      redirectToMain();
    }, [navigate]);

  return (
    <div className='body'>
      <section className="dots-container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </section>
    </div>
  )
}

export default Loading