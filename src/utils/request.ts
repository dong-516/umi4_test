import axios from 'axios';

axios.interceptors.request.use((config)=>{

    const token = localStorage.getItem('token');
    if(token){
        config.headers = {...config.headers,authorization:token}
    }

    return config;
})

export function get(url:string,config:object){
    return axios.get(url,config).then(res=>res.data).catch(((error)=>{throw error}));
}