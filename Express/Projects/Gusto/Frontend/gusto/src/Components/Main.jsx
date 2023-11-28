import React, { useState, useEffect } from 'react';
import './Media.css'
import Navbar from './Navbar/Navbar';
import SignIn from './Login/SignIn';
import SignUp from './Login/SignUp';
import About from './About/About';
import Shops from './Shops/Shops';
import Review from './Review/Review';
import Contact from './Contact/Contact';
import { IoArrowUpCircleSharp } from 'react-icons/io5';
import Profile from './Profile/Profile';

const Main = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    // Add an event listener to check whether to show the scroll-to-top button
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 400; // Adjust this value as needed

      setShowScrollButton(scrollPosition > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Scroll to the top of the page when the arrow is clicked
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling effect
    });
  };

  return (
    <div>
      <Navbar />
      <About />
      <Shops />
      <Review />
      <Contact />
      <Profile/>
      <SignIn />
      <SignUp />

      {showScrollButton && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <IoArrowUpCircleSharp className='scroll-icon' />
        </div>
      )}
    </div>
  );
};

export default Main;
