import React from 'react';

const Profile = () => {
  const userData = JSON.parse(JSON.parse(localStorage.getItem('persist:ecom')).ecomredux.authredux.user);

  return (
    <div>
      <div className='profile-main'>
        <div className='profile-card'>
          <div className='profile-top'>
            <div className='profile-pic'>
              <img src={userData.dp} alt={userData.name} />
              <h2>{userData.name}</h2>
              <h3>{userData.email}</h3> {/* Display the user's email */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
