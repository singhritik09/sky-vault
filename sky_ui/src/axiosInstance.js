import axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: `http://13.239.114.129:8000` 
    // baseURL: `http://localhost:8000`
});

export default axiosInstance
