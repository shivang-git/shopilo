import axios from "axios"
import { base_url } from "../../utils/base_url"
import { config } from "../../utils/axiosconfig.js"

const login=async(userData)=>{
    const response=await axios.post(`${base_url}user/login`,userData)
    if(response.data){
        localStorage.setItem("user",JSON.stringify(response.data))
    }
    return response.data;
}

const getOrders=async()=>{
    try {
        const response=await axios.get(`${base_url}user/getallorders`,config)
        console.log(response.data);
        return response.data;
        
    } catch (error) {
        throw new Error(error)
    }
}

const authService={
    login,
    getOrders
}

export default authService;

