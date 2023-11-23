import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import productService from './productService'


const initialState={
    products:[],
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:""
}

export const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getProductData.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getProductData.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.products=action.payload;
        })
        .addCase(getProductData.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error
        })
    }
})


export const getProductData=createAsyncThunk('products/all-products',async (product,thunkAPI)=>{
    try {
        return await productService.getProductData();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})


export default productSlice.reducer;