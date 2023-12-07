import React, { useEffect } from 'react'
import { verifyTest } from './apiCall';

const Niha = () => {


  useEffect(() => {
    const displayData = async () => {
      try {
        const a = await verifyTest();
        console.log(a);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    displayData(); 
  
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
                   
                    <div className='profile-display'>
                        <div className='profile-display-form'>
                            {/* <input type="text" placeholder={data.firstname} value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                            <input type="text" placeholder={data.lastname} value={lastname} onChange={(e) => setLastName(e.target.value)} />
                            <input type="date" placeholder={data.dob} value={dob} onChange={(e) => setDob(e.target.value)} />
                            <input type="mail" placeholder={data.email} value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="text" placeholder={data.phone} value={phone} onChange={(e) => setPhone(e.target.value)} /> */}
                        </div>
                    </div>
          
                </div>
            </div>
        </div>
    )
}

export default Niha