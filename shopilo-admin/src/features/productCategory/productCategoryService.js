import axios from "axios"
import { base_url } from "../../utils/base_url"

const getProductCategory=async()=>{
    const response=await axios.get(`${base_url}category/categories`)
    return response.data
}

const productCategoryService={
    getProductCategory,
}

export default productCategoryService;

