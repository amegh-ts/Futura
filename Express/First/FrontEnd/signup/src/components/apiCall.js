import axios from 'axios';
import { loginUser } from '../Redux/UserRedux';

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
        console.log('Sing res',res);
         return res.data
    } catch (err) {
        console.log(err);
    }
}

export const deleteIdData=async(id)=>{
    console.log('Delete id ?',id);
    try {
        const res=await axios.delete(`http://localhost:7000/delete/${id}`)
        console.log('deleted');
    } catch (err) {
        console.log(err);
    }
}

export const updateData=async(id ,datas)=>{
    console.log('Update id ?',id);
    try {
        const res=await axios.put(`http://localhost:7000/updatedata/${id}`,datas)
        console.log('Updated data is',res.data);
        
    } catch (err) {
        console.log(err);
        
    }
}

export const loginData=async(loginData,dispatch)=>{
    console.log('Login Data is?',loginData);
    try {
        const res=await axios.post('http://localhost:7000/login',loginData);
        console.log('Response Status:', res.status);
        // console.log('Response Data:', res.data);
        dispatch(loginUser(res.data))
    } catch (err) {
       console.log(err); 
    }
}