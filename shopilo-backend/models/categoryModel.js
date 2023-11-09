import mongoose from "mongoose"

let CategorySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        index:true,
    }
},{timestamps:true});

//Export the model
const Category= mongoose.model('Category', CategorySchema);

export default Category