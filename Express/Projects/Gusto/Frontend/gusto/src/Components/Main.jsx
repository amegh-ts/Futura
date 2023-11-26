import React from 'react'
import Navbar from './Navbar/Navbar'
import SignIn from './Login/SignIn'
import SignUp from './Login/SignUp'
import About from './About/About'
import Shops from './Shops/Shops'
import Review from './Review/Review'
import Contact from './Contact/Contact'

const Main = () => {
  return (
    <div>
        <Navbar/>
        <About/>
        <Shops/>
        <Review/>
        <Contact/>
        <SignIn/>
        <SignUp/>
    </div>
  )
}

export default Main