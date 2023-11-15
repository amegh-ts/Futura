import React, { useEffect, useState } from 'react'
import { getIdData } from './apiCall';

const Profile = () => {
    const [profileId, setProfileId] = useState('');
    const [data, setData] = useState({});

    const handleInputChange = (event) => {
        setProfileId(event.target.value);

    };
    // console.log("fhfhf",profileId)
    //    async function handleSubmit1(){
    //         var a=await getIdData(profileId)
    //         console.log('a where?',a);
    //         setData(a)
    //     }

    console.log('data ?', data);
    const handleSubmit = async () => {
        // console.log('Profile ID submitted:', profileId);
        var a = await getIdData(profileId)
        console.log('a where?', a);
         setData(a)
    };
    
console.log("gggg",data)
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
                <div className="profile-container">
                    <div className='profile-id-form'>
                        <span>
                            <input type="text" placeholder='enter the id' value={profileId} onChange={handleInputChange} />
                        </span>
                        <span>
                            <button onClick={handleSubmit}>Submit</button>
                        </span>
                    </div>
                    <div className='profile-display'>
                        <ul>
                           
                                <li >
                                    <div>
                                        <span>{data._id}</span>
                                    </div>
                                    <div>
                                        <span>{data.firstname}</span><span> </span>
                                        <span>{data.lastname}</span>
                                    </div>
                                    <div>
                                        <span>{data.dob}</span>
                                    </div>
                                    <div>
                                        <span>{data.email}</span>
                                    </div>
                                    <div>
                                        <span>{data.phone}</span>
                                    </div>
                                </li>
                     
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile