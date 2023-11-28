import axios from "axios";

// const BASE_URL = "http://localhost:5000/";
const BASE_URL = "http://localhost:5000/";

var Token =JSON.parse(JSON.parse(localStorage.getItem('persist:loginusers')).user).userInfo[0]?.accessToken;   //took the token directly from the localstorage
    console.log('==========================',Token);


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${Token}` }        // here headers is used to access the token passed via header
})