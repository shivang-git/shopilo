import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import productCategoryService from './productCategoryService'


const initialState={
    productsCategories:[],
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:""
}

export const productCategorySlice=createSlice({
    name:"productsCategories",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getProductCategory.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getProductCategory.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.products=action.payload;
        })
        .addCase(getProductCategory.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error
        })
    }
})


export const getProductCategory=createAsyncThunk('productsCategory/all-categories',async (product,thunkAPI)=>{
    try {
        return await productCategoryService.getProductCategory();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})


export default productCategorySlice.reducer;