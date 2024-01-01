import { useEffect, useState } from 'react';
import './App.css';
import Content from './Components/Users/Content/Content';
import Home from './Components/Users/Home/Home';
import Navbar from './Components/Users/Navbar/Navbar';
import { IoArrowUpCircleSharp } from 'react-icons/io5';


function App() {
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
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling effect
    });
  };
  return (
    <div className="App">
      <div className="App-header">
        <Navbar />
        <Home />
        <Content />
        {showScrollButton && (
          <div className="scroll-to-top" onClick={scrollToTop}>
            <IoArrowUpCircleSharp className='scroll-icon' />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
