import { loginUser } from "../Redux/UserRedux";
import { publicRequest, userRequest } from "../RequestMethods";

const storedData = localStorage.getItem('persist:unknown');
const user = storedData ? JSON.parse(JSON.parse(storedData).user) : null;
const userId = user?.userInfo?.[0]?.id;

// console.log(userId);

// SignUp
export const signUpData = async (data) => {
    console.log('first check', data);
    const newData = { ...data, type: 'user' }
    console.log('new dattaaa', newData);
    try {
        const res = await publicRequest.post('/signup', newData);
        console.log('Response Status:', res.status);
        console.log('Response Data:', res.data);
    } catch (err) {
        console.log(err);
    }
}

//SignIn
export const signInData = async (loginData, dispatch) => {
    try {
        const res = await publicRequest.post('/signin', loginData)
        console.log('Response Status:', res.status);
        // console.log('Response Data:', res.data);
        const { _id: id, accessToken, type } = res.data;
        const userData = { id, accessToken, type };
        dispatch(loginUser(userData))
    } catch (error) {
        console.log(error);
    }
}

//Profile
export const getIdData = async () => {
    try {
        // console.log('User ID:', userId);
        const res = await userRequest.get(`/profile/${userId}`)
        console.log('Sing res', res.status);
        return res.data
    } catch (error) {
        console.log(error);
    }
}


//send notification
export const sendNotification = async (data) => {
    try {
        console.log('first check', data);
        const newData = { ...data, user: 'Admin' }
        console.log('newdaaaaaaaaaaaata', newData);
        const res = await userRequest.post('/sendNotification', newData)
        console.log('Response Status:', res.status);
        console.log('Response Data:', res.data);
    } catch (error) {
        console.log(error);
    }
}

//get notification
export const getNotification = async () => {
    try {
        const res = await userRequest.get('/getNotification')
        // console.log(res.data);   
        return res.data
    } catch (error) {
        console.log(error);
    }
}