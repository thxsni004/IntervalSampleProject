import axios from "axios";

const BASE_URL=import.meta.env.VITE_BASE_URL;

const request =axios.create({
    baseURL:BASE_URL,
    headers:{
        'Content-Type':'application/json',
    },
});

request.interceptors.request.use((config)=>{
    const user=JSON.parse(localStorage.getItem('user'));
    if(user?.token){
        config.headers.Authorization=`bearer ${user.token}`;
    }
    return config;
});
console.log("BASE_URL:", BASE_URL);


export default request;