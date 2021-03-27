import axios from 'axios';

const axiosData = axios.create({
    baseURL:'http://localhost:8000'
});

export default axiosData;