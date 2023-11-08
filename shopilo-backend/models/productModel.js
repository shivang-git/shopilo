import mongoose from "mongoose";


let productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    quantity:{
        type:Number
    },
    images:{
        type:Array
    },
    color:{
        type:String,
        
    },
    ratings:[{
        type:Number,
        postedby:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
    }],
    slug:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
},{timestamps:true});


const Product=mongoose.model('Product', productSchema);

export default Product