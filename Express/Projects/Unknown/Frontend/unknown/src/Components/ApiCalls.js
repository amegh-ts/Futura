import { loginUser } from "../Redux/UserRedux";
import { publicRequest, userRequest } from "../RequestMethods";

const storedData = localStorage.getItem('persist:unknown');
const user = storedData ? JSON.parse(JSON.parse(storedData).user) : null;
const userId = user?.userInfo?.[0]?.id;

// SignUp
export const signUpData = async (data) => {
    const newData = { ...data, type: 'user' }
    try {
        const res = await publicRequest.post('/signup', newData);
        console.log('Response Status:', res.status);
    } catch (err) {
        console.log(err);
    }
}

//SignIn
export const signInData = async (loginData, dispatch) => {
    try {
        const res = await publicRequest.post('/signin', loginData)
        console.log('Response Status:', res.status);
        const { _id: id, accessToken, type } = res.data;
        const userData = { id, accessToken, type };
        dispatch(loginUser(userData))
    } catch (error) {
        console.log(error);
    }
}

//all users
export const getUsers = async () => {
    try {
        const res = await userRequest.get('/alldata')
        console.log('Response Status:', res.status);
        return res.data
    } catch (error) {
        console.log(error);
    }
}

//Profile
export const getIdData = async () => {
    try {
        const res = await userRequest.get(`/profile/${userId}`)
        console.log('Response Status:', res.status);
        return res.data
    } catch (error) {
        console.log(error);
    }
}

//Update profile
export const updateProfile = async (data) => {
    try {
        const res = await publicRequest.put(`/updateprofile/${userId}`, data)
        console.log('Response Status:', res.status);
    } catch (err) {
        console.log(err);

    }
}

//Update password
export const updatePassword = async (data) => {
    try {
        const res = await publicRequest.put(`/updatepass/${userId}`, data)
        console.log('Response Status:', res.status);
    } catch (err) {
        console.log(err);

    }
}

//send notification
export const sendNotification = async (data) => {
    try {
        const newData = { ...data, user: 'Admin' }
        const res = await userRequest.post('/sendNotification', newData)
        console.log('Response Status:', res.status);

    } catch (error) {
        console.log(error);
    }
}

//get notification
export const getNotification = async () => {
    try {
        const res = await userRequest.get('/getNotification')
        console.log('Response Status:', res.status);
        return res.data
    } catch (error) {
        console.log(error);
    }
}


// account recovery
export const accountRecoverys = async (data) => {
    console.log(data);
    try {
        const res = await publicRequest.post('/recovery', data)
        console.log('Response Status:', res.status);
    } catch (error) {
        console.log(error);
    }
}



// chats

// create chat
export const createChat = async (data) => {
    console.log(data);
    try {
        const res = await userRequest.post('/createchat', data)
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

// user chats
export const userChats = async () => {
    try {
        const res = await userRequest.get(`/chats/${userId}`)
        console.log('Response Status:', res.status);
        return res.data
    } catch (error) {
        console.log(error);
    }
}