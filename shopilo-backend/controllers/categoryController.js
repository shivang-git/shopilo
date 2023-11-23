import Category from "../models/categoryModel.js";

export const createCategory=async(req,res)=>{
    try {
        const newCategory=await Category.create(req.body)
        res.json(newCategory)
    } catch (error) {
        throw new Error(error)
    }
}


export const updateCategory=async(req,res)=>{
    const {id}=req.params
    try {
        const newCategory=await Category.findByIdAndUpdate(id,req.body,{new:true})
        res.json(newCategory)
    } catch (error) {
        throw new Error(error)
    }
}


export const deleteCategory=async(req,res)=>{
    const {id}=req.params
    try {
        const deleteCategory=await Category.findByIdAndDelete(id);
        res.json(deleteCategory)
    } catch (error) {
        throw new Error(error)
    }
}


export const getCategory=async(req,res)=>{
    const {id}=req.params
    try {
        const getCategory=await Category.findById(id);
        res.json(getCategory)
    } catch (error) {
        throw new Error(error)
    }
}


export const getallCategory=async(req,res)=>{
    const {title}=req.body
    try {
        const getallCategory=await Category.find();
        res.json(getallCategory)
    } catch (error) {
        throw new Error(error)
    }
}


