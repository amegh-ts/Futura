import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <profile>
      <div className='profile-main'>
        <div className='profile-left'>
          <div className='profile-left-image'>
            <img src="/Images/p1.png" alt="" />
          </div>
          <div className='profile-left-details'>
            <h2>Name</h2>
            <h4>email</h4>
            <h6>dob</h6>
          </div>
        </div>
        <div className='profile-right'>ss</div>
      </div>
    </profile>
  )
}

export default Profile