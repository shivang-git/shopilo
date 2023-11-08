import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'



export const  AuthMiddleware= asyncHandler(async(req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(" ")[1]
        try{
            if(token){
                const decoded=jwt.verify(token,process.env.SECRET_KEY)
                const user=await User.findById(decoded.id);
                req.user=user;
                next();
            }
        }catch(error){
            throw new Error("authorized token expired")
        }
    }else{
        throw new Error("No token found in header")
    }
})


export const IsAdmin=asyncHandler(async(req,res,next)=>{
    const {email}=req.user
    const adminUser=await User.findOne({email});
    if(adminUser.role!== "admin"){
        throw new Error("you are notdfff an admin")
    }else{
        next();
    }

})