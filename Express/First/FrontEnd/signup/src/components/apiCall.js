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
    console.log('Update is ?',id);
    try {
        const res=await axios.put(`http://localhost:7000/updatedata/${id}`,datas)
        console.log('Updated data is',res.data);
        
    } catch (err) {
        console.log(err);
        
    }
}