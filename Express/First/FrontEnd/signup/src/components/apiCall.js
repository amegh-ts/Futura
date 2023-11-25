import { loginUser } from '../Redux/UserRedux';
import { publicRequest } from '../RequestMethod';

export const signUpData = async (data) => {
    console.log('first check', data);
    try {
        const res = await publicRequest.post('/postmethods', data);
        console.log('Response Status:', res.status);
        console.log('Response Data:', res.data);

    } catch (err) {
        console.log(err);
    }
}

export const getIdData=async(id)=>{
    console.log('id ?',id);
    try {
        const res=await publicRequest.get(`/getmethod/${id}`)
        console.log('Sing res',res);
         return res.data
    } catch (err) {
        console.log(err);
    }
}

export const deleteIdData=async(id)=>{
    console.log('Delete id ?',id);
    try {
        const res=await publicRequest.delete(`/delete/${id}`)
        console.log('deleted');
    } catch (err) {
        console.log(err);
    }
}

export const updateData=async(id ,datas)=>{
    console.log('Update id ?',id);
    try {
        const res=await publicRequest.put(`/updatedata/${id}`,datas)
        console.log('Updated data is',res.data);
        
    } catch (err) {
        console.log(err);
        
    }
}

export const loginData=async(loginData,dispatch)=>{
    console.log('Login Data is?',loginData);
    try {
        const res=await publicRequest.post('/login',loginData);
        console.log('Response Status:', res.status);
        // console.log('Response Data:', res.data);
        dispatch(loginUser(res.data))
    } catch (err) {
       console.log(err); 
    }
}