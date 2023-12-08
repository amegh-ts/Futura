import { loginUser } from '../Redux/UserRedux';
import { publicRequest, userRequest } from '../RequestMethod';


// var userId = JSON.parse(JSON.parse(localStorage.getItem('persist:loginusers')).user).userInfo[0]?._id;
var loginUsersData = JSON.parse(localStorage.getItem('persist:loginusers'));
var userId = loginUsersData && loginUsersData.user && loginUsersData.user.userInfo[0]?._id;

export const signUpData = async (data) => {
    // console.log('first check', data);
    try {
        const res = await publicRequest.post('/postmethods', data);
        // console.log('Response Status:', res.status);
        // console.log('Response Data:', res.data);

    } catch (err) {
        // console.log(err);
    }
}

export const getIdData = async (id) => {
    // console.log('id ?', id);
    try {
        const res = await publicRequest.get(`/getmethod/${id}`)
        // console.log('Sing res', res);
        return res.data
    } catch (err) {
        // console.log(err);
    }
}

export const deleteIdData = async (id) => {
    // console.log('Delete id ?', id);
    try {
        const res = await publicRequest.delete(`/delete/${id}`)
        // console.log('deleted');
    } catch (err) {
        // console.log(err);
    }
}

export const updateData = async (id, datas) => {
    // console.log('Update id ?', id);
    try {
        const res = await publicRequest.put(`/updatedata/${id}`, datas)
        // console.log('Updated data is', res.data);
    } catch (err) {
        // console.log(err);

    }
}

export const loginData = async (loginData, dispatch) => {
    // console.log('Login Data is?', loginData);
    try {
        const res = await publicRequest.post('/login', loginData);
        // console.log('Response Status:', res.status);
        // console.log('Response Data:', res.data);
        dispatch(loginUser(res.data))
    } catch (err) {
        // console.log(err);
    }
}
export const verifyTest = async () => {
    try {
       
        console.log('User ID:', userId);
        const res = await userRequest.get(`/verifytest/${userId}`);
        // console.log('API Response:', res);
        return res.data
    } catch (error) {
        // console.log('Error during API request:', error);
    }
};

