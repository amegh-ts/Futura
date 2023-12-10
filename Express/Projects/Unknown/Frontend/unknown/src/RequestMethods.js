import axios from "axios"

const BASE_URL = "http://localhost:5000/";

const storedData = localStorage.getItem('persist:unknown');
const user = storedData ? JSON.parse(JSON.parse(storedData).user) : null;
const Token = user?.userInfo?.[0]?.accessToken;

// console.log('==========================',Token);

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${Token}` }        // here headers is used to access the token passed via header
})