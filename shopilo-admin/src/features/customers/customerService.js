import axios from "axios"
import { base_url } from "../../utils/base_url"

const getCustomerData=async()=>{
    const response=await axios.get(`${base_url}user/all-users`)
    return response.data
}

const customerService={
    getCustomerData,
}

export default customerService;

