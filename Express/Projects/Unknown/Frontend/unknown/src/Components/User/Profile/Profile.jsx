import React, { useEffect, useState } from 'react'
import './Profile.css'
import { getIdData, updatePassword, updateProfile } from '../../ApiCalls'

const Profile = () => {
  const [data, setData] = useState({});

  const [uname, setUname] = useState('')
  const [dob, setDob] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        const apiData = await getIdData();
        console.log(apiData);
        setData(apiData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    setUname(data.uname || '');
    setDob(data.dob || '');
    setEmail(data.email || '');
    setPhone(data.phone || '');
    setCurrentPassword('current password is ' + data.originalPassword || '')
  }, [data])

  const onEditProfile = async () => {
    await updateProfile({ uname, dob, phone, email })
    alert('successfully updated')
  }
  const onChangePassword = async() => {
    console.log(password);
await updatePassword({password})
  }



  return (
    <profile>
      <div className='profile-main'>
        <div className='profile-left'>
          <div className='profile-left-image'>
            <img src="/Images/p1.png" alt="" />
          </div>
          <div className='profile-left-details'>
            <h3>{data.uname}</h3>
            <h5>{data.email}</h5>
            <h6>{data.dob}</h6>
          </div>
        </div>
        <div className='profile-right'>
          <div className='edit-profile'>
            <h3>Edit Profile</h3>
            <div className='profile-input'>
              <input type="text" placeholder={data.uname} value={uname} onChange={(e) => setUname(e.target.value)} />
            </div>
            <div className='profile-input'>
              <input type="date" placeholder={data.dob} value={dob} onChange={(e) => setDob(e.target.value)} />
            </div>
            <div className='profile-input'>
              <input type="text" placeholder={data.email} value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='profile-input'>
              <input type="text" placeholder={data.phone} value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="edit-profile-button">
              <button onClick={onEditProfile}>Submit</button>
            </div>
          </div>
          <div>
            <div className="edit-profile">
              <h3>Change Password</h3>
              <div className='profile-input'>
                <input type="text" placeholder='Current Password' value={currentPassword} />
              </div>
              <div className='profile-input'>
                <input type="password" placeholder='New Password' value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="edit-profile-button">
                <button onClick={onChangePassword}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </profile>
  )
}

export default Profile