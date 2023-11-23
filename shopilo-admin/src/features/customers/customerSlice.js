import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import customerService from './customerService'


const initialState={
    customers:[],
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:""
}

export const customerSlice=createSlice({
    name:"customers",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getCustomerData.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getCustomerData.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.customers=action.payload;
        })
        .addCase(getCustomerData.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error
        })
    }
})


export const getCustomerData=createAsyncThunk('customers/all-customers',async (user,thunkAPI)=>{
    try {
        return await customerService.getCustomerData();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})


export default customerSlice.reducer;