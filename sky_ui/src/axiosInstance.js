import axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: `http://3.25.197.125:3000`
    // baseURL: `http://localhost:8000`
});

export default axiosInstance
