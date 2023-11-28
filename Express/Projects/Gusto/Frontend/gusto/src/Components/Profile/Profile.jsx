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
                    {/* <img src="img/r1.jpg" alt="" /> */}
                  </div>
                  <div className='profile-left-content'></div>
                </div>
                <div className='profile-right'></div>
            </div>
        </div>
    </section>
  )
}

export default Profile