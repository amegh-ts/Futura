import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const userDataa = useSelector((state) => state.auth && state.auth.user);
  console.log('egfjhsdjbsejfvgjbjfva', userDataa);
  
  if (!Array.isArray(userDataa)) {
    return <div>No user data available.</div>;
  }
  return (
    <div>
      <div className='profile-main'>
        {userDataa.map((user, index) => (
          <div className='profile-card' key={index}>
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