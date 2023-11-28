import React from 'react'
import { useSelector } from 'react-redux'


const Test = () => {
    const reduxData=useSelector((state)=>state.user.userInfo)
    console.log('hdsbsjdfvaskbvfdjhkb hskdafn',reduxData);


  return (
    <div>
       <ul>
        {reduxData.map((user) => (
          <li key={user._id}>
            <strong>Name:</strong> {user.firstname} {user.lastname}, <br />
            <strong>DOB:</strong> {user.dob}, <br />
            <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Test