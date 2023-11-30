import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { verifyTest } from './apiCall';


const Test = () => {
  // const reduxData=useSelector((state)=>state.user.userInfo)
  // console.log('hdsbsjdfvaskbvfdjhkb hskdafn',reduxData);

  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const apiData = await verifyTest();
        // console.log('Data from API:', apiData);
        setData(apiData);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <div className='signup-wraper'>
        <div className="signup-message">
          please use a larger display size
        </div>
        <div className="signup-box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="signup-container">
          <ul>
            <li>
              <strong>Name:</strong> {data.firstname} {data.lastname}, <br />
              <strong>DOB:</strong> {data.dob}, <br />
              <strong>Email:</strong> {data.email} <br />
              <strong>Phone:</strong> {data.phone}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Test






//         {/* <ul>
//   {reduxData.map((user) => (
//     <li key={user._id}>
//       <strong>Name:</strong> {user.firstname} {user.lastname}, <br />
//       <strong>DOB:</strong> {user.dob}, <br />
//       <strong>Email:</strong> {user.email}
//     </li>
//   ))}
// </ul> */}


// 