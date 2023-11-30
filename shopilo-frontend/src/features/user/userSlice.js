import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { userAPI } from "./userAPI";
import { toast } from "react-toastify";



const initialState={
    user:"",
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

export const userSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(registerUser.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(registerUser.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isError=false
            state.isSuccess=true
            state.user=action.payload
            if(state.isSuccess===true){
                toast.info("User Created Successfully")
            }
        })
        .addCase(registerUser.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.isSuccess=false
            state.message=action.error
            if(state.isError===true){
                toast.info(action.error)
            }
        })
    }
})




export const registerUser=createAsyncThunk("auth/register",async(userData,thunkAPI)=>{
    try {
        return await userAPI.register(userData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})


export default userSlice.reducer