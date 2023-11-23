import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice';
import customerReducer from '../features/customers/customerSlice'
import productReducer from '../features/product/productSlice'
import productCategoryReducer from '../features/productCategory/productCategorySlice'


export const store=configureStore({
    reducer:{
        auth:authReducer,
        customers:customerReducer,
        products:productReducer,
        productCategory:productCategoryReducer
    }
}) 