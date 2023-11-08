import Product from '../models/productModel.js'
import AsyncHandler from 'express-async-handler'

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