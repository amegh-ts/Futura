import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const userData = useSelector((state) => state.auth.user); // Use state.auth.user
  console.log('*********', userData);
  return (
    <div>
      <div className='profile-main'>
        {userData.map((user) => (
          <div className='profile-card'>
            <div className='profile-top'>
              <div className='profile-pic'>
                <img src={user.dp} alt={user.name} />
                <h2>{user.name}</h2>
                <h3>Email</h3>
              </div>
              <div></div>
              <div></div>
            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default Profile