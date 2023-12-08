import { loginUser } from "../Redux/UserRedux";
import { publicRequest } from "../RequestMethods";

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