import Product from '../models/productModel.js'
import AsyncHandler from 'express-async-handler'
import User from '../models/userModel.js';
import cloudinaryUpload from '../utils/cloudinary.js';
import fs from 'fs'




export const CreateProduct=AsyncHandler(async(req,res)=>{
    try {
        const newProduct=await Product.create(req.body);
        res.json(newProduct)

    } catch (error) {
        throw new Error(error)
    }
})


export const GetProduct=AsyncHandler(
    async(req,res)=>{
        const {id}=req.params
        try {
            const findProduct=await Product.findById(id);
            res.json(findProduct)
        } catch (error) {
            throw new Error(error);
        }
    }
)

export const GetAllProduct=AsyncHandler(
    async(req,res)=>{
        try {
            const getallProduct=await Product.find();
            res.json(getallProduct)
        } catch (error) {
            throw new Error(error)
        }
    }
)


export const UpdateProduct=AsyncHandler(
    async(req,res)=>{
        try {
            const {id}=req.params
            const updateProduct=await Product.findByIdAndUpdate(id,req.body,{new:true})
            res.json(updateProduct)
        } catch (error) {
            throw new Error(error)
        }
    }
)


export const DeleteProduct=AsyncHandler(async(req,res)=>{
    try {
        const {id}=req.params
        const deleteProduct=await Product.findByIdAndDelete(id)
        res.json(deleteProduct)
    } catch (error) {
        throw new Error(error)
    }
})



export const addWishlist=async(req,res)=>{
    const {id}=req.user;
    const {productId}=req.body
    try {
        const user=await User.findById(id);
        const  alreadyadded=user.wishlist.find((id)=>id.toString()===productId)
        if(alreadyadded){
            let user=await User.findByIdAndUpdate(id,{$pull:{wishlist:productId}},{new:true})
            res.json(user)
        }else{
            let user=await User.findByIdAndUpdate(id,{$push:{wishlist:productId}},{new:true})
            res.json(user)
        }
    } catch (error) {
        throw new Error(error)
    }
}


export const uploadImages=async(req,res)=>{
    const {id}=req.params
    try {
        const upload=(path)=> cloudinaryUpload(path,"images");
        const urls=[]
        const files=req.files;
        for(const file of files){
            const {path}=file
            const newpath=await upload(path)
            urls.push(newpath)
            fs.unlinkSync(path)
        }
        const findProduct= await Product.findByIdAndUpdate(id,{images:urls.map((file)=>{return file})},{new:true})
        res.json(findProduct)
    } catch (error) {
        throw new Error(error)
    }
    res.json({msg:"helo"})
}