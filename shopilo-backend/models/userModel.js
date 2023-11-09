import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import crypto from 'crypto'

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
    },
    cart:{
        type:Array,
        default:[]
    },
    address:{
        type:String
    },
    wishlist:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    }],
    refreshToken:{
        type:String
    },
    passwordChangedAt:Date,
    passwordResetToken:String,
    passwordResetExpires:Date
},{
    timestamps:true
});

userSchema.pre('save',async function (next){
    const salt=await bcrypt.genSaltSync(10);
    this.password=await bcrypt.hash(this.password,salt)
})

userSchema.methods.isPasswordMatch=async function(Password){
    return await bcrypt.compare(Password,this.password)
}

userSchema.methods.CreatePassowrdResetToken=async function(){
    const resettoken=crypto.randomBytes(32).toString("hex");
    this.passwordResetToken=crypto.createHash("sha256").update(resettoken).digest("hex");
    this.passwordResetExpires=Date.now()+ 10*60*1000
    return resettoken;
}




const User = mongoose.model('User', userSchema);

//Export the model
export default User