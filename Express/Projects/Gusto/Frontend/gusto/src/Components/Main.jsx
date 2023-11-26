import React from 'react'
import Navbar from './Navbar/Navbar'
import SignIn from './Login/SignIn'
import SignUp from './Login/SignUp'
import About from './About/About'
import Shops from './Shops/Shops'

const Main = () => {
  return (
    <div>
        <Navbar/>
        <About/>
        <Shops/>
        <SignIn/>
        <SignUp/>
    </div>
  )
}

export default Main