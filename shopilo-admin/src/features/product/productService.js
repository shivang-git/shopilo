import axios from "axios"
import { base_url } from "../../utils/base_url"

const getProductData=async()=>{
    const response=await axios.get(`${base_url}product/all-products`)
    return response.data
}

const productService={
    getProductData,
}

export default productService;

