import axios from "axios";

// const BASE_URL = "http://localhost:5000/";
const BASE_URL = "https://bot-1-x84j.onrender.com/";

export const publicRequest=axios.create({
    baseURL:BASE_URL,
})