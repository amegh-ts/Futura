import axios from "axios"

const BASE_URL = "http://localhost:5000/";

// var Token =JSON.parse(JSON.parse(localStorage.getItem('persist:loginusers')).user).userInfo[0]?.accessToken;   //took the token directly from the Local storage
// console.log('==========================',Token);

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});