import axios from 'axios';

export const signUpData = async (data) => {
    console.log('first check', data);
    try {
        const res = await axios.post('http://localhost:7000/postmethods', data);
        console.log('Response Status:', res.status);
        console.log('Response Data:', res.data);

    } catch (err) {
        console.log(err);
    }
}

export const getIdData=async(id)=>{
    console.log('id ?',id);
    try {
        const res=await axios.get(`http://localhost:7000/getmethod/${id}`)
        console.log('888888888888',res);
         return res.data
    } catch (err) {
        console.log(err);
    }
}