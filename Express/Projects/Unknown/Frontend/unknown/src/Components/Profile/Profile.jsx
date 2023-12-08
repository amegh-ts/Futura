import React, { useEffect, useState } from 'react'
import './Profile.css'
import { getIdData } from '../ApiCalls'

const Profile = () => {
  const [data, setData] = useState({});


  useEffect(() => {
    async function fetchData() {
      try {
        const apiData = await getIdData();
        console.log('Data from API:', apiData);
        setData(apiData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  console.log(data);

  return (
    <profile>
      <div className='profile-main'>
        <div className='profile-left'>
          <div className='profile-left-image'>
            <img src="/Images/p1.png" alt="" />
          </div>
          <div className='profile-left-details'>
            <h2>{data.uname}</h2>
            <h4>{data.email}</h4>
            <h6>{data.dob}</h6>
          </div>
        </div>
        <div className='profile-right'>ss</div>
      </div>
    </profile>
  )
}

export default Profile