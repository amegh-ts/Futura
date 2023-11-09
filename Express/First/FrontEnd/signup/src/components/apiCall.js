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
