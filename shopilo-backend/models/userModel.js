import mongoose from "mongoose";
import bcrypt from 'bcrypt';


// Declare the Schema of the Mongo model
let userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:"user"
    }
});

userSchema.pre('save',async function (next){
    const salt=await bcrypt.genSaltSync(10);
    this.password=await bcrypt.hash(this.password,salt)
})

userSchema.methods.isPasswordMatch=async function(Password){
    return await bcrypt.compare(Password,this.password)
}


const User = mongoose.model('User', userSchema);

//Export the model
export default User