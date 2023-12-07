import React, { useEffect, useState } from 'react'
import { deleteIdData, getIdData, updateData } from './apiCall';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../Redux/UserRedux';

const Profile = ({ value }) => {
    const [profileId, setProfileId] = useState('');
    const [data, setData] = useState({});

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [dob, setDob] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')



    const update = () => {

        updateData(profileId, { firstname, lastname, dob, email, phone })
        alert('Successfully updated')
    }

    const dispatch = useDispatch()

    // console.log('valueeeeeeeeees', value);


    const handleInputChange = (event) => {
        setProfileId(event.target.value);

    };

    // console.log('data ?', data);
    const handleSubmit = async () => {
        try {
            // console.log('Profile ID submitted:', profileId);
            const a = await getIdData(profileId);
            // console.log('Result:', a);
            setData(a);
        } catch (error) {
            // console.error('Error fetching data:', error);
        }
    };

    const handleDelete = async () => {
        try {
            // console.log('Profile id submitted to delete is ?', profileId);
            deleteIdData(profileId)
            // console.log('profile deleted');
            alert('Successfully deleted Profile')
        } catch (err) {
            // console.log('Error Deleting user', err);
        }
    }

    function handleLOgout() {
        dispatch(logoutUser())
    }

    useEffect(() => {
        setProfileId(value)
        
        setFirstName(data.firstname || ''); // Set default value to empty string if undefined
        setLastName(data.lastname || '');
        setDob(data.dob || '');
        setEmail(data.email || '');
        setPhone(data.phone || '');
    }, [data])

    // console.log("gggg", data)
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
                    <div className='profile-id-form'>
                        <span>
                            <input type="text" placeholder='enter the id' value={profileId} onChange={handleInputChange} required />
                        </span>
                        <span>
                            <button onClick={handleSubmit}>Submit</button>
                            <span> </span>
                            <button onClick={handleDelete}>Delete</button>
                        </span>
                    </div>
                    <div className='profile-display'>
                        <div className='profile-display-form'>
                            <input type="text" placeholder={data.firstname} value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                            <input type="text" placeholder={data.lastname} value={lastname} onChange={(e) => setLastName(e.target.value)} />
                            <input type="date" placeholder={data.dob} value={dob} onChange={(e) => setDob(e.target.value)} />
                            <input type="mail" placeholder={data.email} value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="text" placeholder={data.phone} value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                    </div>
                    <div className='signup-button'>
                        <button onClick={update}>Update</button>
                    </div>
                    <div className='signup-button'>
                        <button onClick={handleLOgout}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile