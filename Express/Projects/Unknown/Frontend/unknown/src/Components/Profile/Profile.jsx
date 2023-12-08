import React, { useEffect, useState } from 'react'
import './Profile.css'
import { getIdData } from '../ApiCalls'

const Profile = () => {
  const [data, setData] = useState({});

  const [uname, setUname] = useState('')
  const [dob, setDob] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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

  useEffect(() => {
    setUname(data.uname || ''); // Set default value to empty string if undefined
    setDob(data.dob || '');
    setEmail(data.email || '');
    setPhone(data.phone || '');
  }, [data])

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
        <div className='profile-right'>
          <div className='edit-profile'>
            <h3>Edit Profile</h3>
            <div className='profile-input'>
              <input type="text" placeholder={data.uname} value={uname} onChange={(e) => setUname(e.target.value)} />
            </div>
            {/* <div className='profile-input'>
              <input type="date" placeholder={data.dob} value={dob} onChange={(e) => setDob(e.target.value)} />
            </div> */}
            <div className='profile-input'>
              <input type="text" placeholder={data.email} value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='profile-input'>
              <input type="text" placeholder={data.phone} value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="edit-profile-button">
              <button>Submit</button>
            </div>
          </div>
          <div>nb</div>
        </div>
      </div>
    </profile>
  )
}

export default Profile