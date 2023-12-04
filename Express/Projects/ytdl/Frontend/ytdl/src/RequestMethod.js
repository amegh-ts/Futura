import axios from "axios";

// const BASE_URL = "http://localhost:5000/";
const BASE_URL = "https://ytdls.onrender.com";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
