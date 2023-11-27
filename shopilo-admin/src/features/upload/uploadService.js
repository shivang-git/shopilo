import axios from "axios";
import {config} from '../../utils/axiosconfig.js'
import { base_url } from "../../utils/base_url.js";



const uploadImg=async(data)=>{
    const response=await axios.post(`${base_url}upload/`,data,config)
    return response.data
}

const uploadService={
    uploadImg
}


export default uploadService

