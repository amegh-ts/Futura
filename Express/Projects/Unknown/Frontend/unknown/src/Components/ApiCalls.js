import { loginUser } from "../Redux/UserRedux";
import { publicRequest, userRequest } from "../RequestMethods";

const storedData = localStorage.getItem('persist:unknown');
const user = storedData ? JSON.parse(JSON.parse(storedData).user) : null;
const userId = user?.userInfo?.[0]?.id;

console.log(userId);

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
        const userData = { id, accessToken,type };
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