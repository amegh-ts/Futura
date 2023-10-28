import React from 'react';

const Profile = () => {
  // Check if the data exists in localStorage
  const storedData = localStorage.getItem('persist:ecom');

  

  if (!storedData) {
    // Handle the case where data is not in localStorage
    return <div>No user data found</div>;
  }

  try {
    const parsedData = JSON.parse(storedData);
    const authData = parsedData.authredux;

    if (!authData) {
      // Handle the case where auth data is missing
      return <div>No user data found</div>;
    }

    const userData = JSON.parse(authData).user;

    if (!userData) {
      // Handle the case where user data is missing
      return <div>No user data found</div>;
    }

    return (
      <div>
        <div className='profile-main'>
          <div className='profile-card'>
            <div className='profile-top'>
              <div className='profile-pic'>
                <img src={userData.dp} alt="User Profile" />
                <h2>{userData.name}</h2>
                <h3>{userData.email}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    // Handle any parsing errors
    console.error('Error parsing user data:', error);
    return <div>Error loading user data</div>;
  }
};

export default Profile;
