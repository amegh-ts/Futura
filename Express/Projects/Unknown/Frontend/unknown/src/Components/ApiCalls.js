import { loginUser } from "../Redux/UserRedux";
import { publicRequest, userRequest } from "../RequestMethods";

var userId = JSON.parse(JSON.parse(localStorage.getItem('persist:unknown')).user).userInfo[0]?.id;

console.log(userId);

// SignUp
export const signUpData = async (data) => {
    console.log('first check', data);
    try {
        const res = await publicRequest.post('/signup', data);
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
        console.log('Response Data:', res.data);
        const { _id: id, accessToken } = res.data;
        const userData = { id, accessToken };
        dispatch(loginUser(userData))
    } catch (error) {
        console.log(error);
    }
}

//Profile
export const getIdData = async () => {
    try {
        console.log('User ID:', userId);
        const res = await userRequest.get(`/profile/${userId}`)
        console.log('Sing res', res);
        return res.data
    } catch (error) {
        console.log(error);
    }
}