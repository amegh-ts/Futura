import React from 'react'
import Navbar from './Navbar/Navbar'
import SignIn from './Login/SignIn'
import SignUp from './Login/SignUp'

const Main = () => {
  return (
    <div>
        <Navbar/>
        <SignIn/>
        <SignUp/>
    </div>
  )
}

export default Main