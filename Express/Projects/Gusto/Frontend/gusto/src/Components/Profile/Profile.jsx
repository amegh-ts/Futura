import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <section>
      <div className="profile-main">
        <div className='profile-container'>
          <div className='profile-left'>
            <div className='profile-left-img'>
              <img src="img/p1.png" alt="" />
            </div>
            <div className='profile-left-content'>
              <h2>Albert John</h2>
              <h4>john.alb@gmail.com</h4>
              <h5>07/12/2002</h5>
            </div>
          </div>
          <div className='profile-right'>
            <div className='profile-right-edit'>
              <h2>Edit Profile</h2>
              <input type="text" placeholder='First Name' />
              <input type="text" placeholder='Last Name' />
              {/* <input type="date" placeholder='DOB' /> */}
              <input type="text" placeholder='Phone' />
              <button>Update</button>
            </div>
            <div className='profile-right-change-pass'>
              <h2>Change Password</h2>
              <input type="password" placeholder='Password' />
              <input type="password" placeholder='Confirm Password' />
              <button>Update</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile