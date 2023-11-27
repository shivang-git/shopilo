import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import jwt from 'jsonwebtoken'
import { GenerateToken } from "../config/jwtToken.js";
import { validateMongodbId } from "../utils/validateMongodb.js";
import { GenerateRefreshToken } from "../config/refreshToken.js";
import { sendEmail } from "../config/emailconfig.js";
import crypto from 'crypto'
import Product from '../models/productModel.js'
import Cart from '../models/cartModel.js'
import uniqid from 'uniqid'
import Order from "../models/orderModel.js";

export const RegisterUser = asyncHandler(async (req, res) => {
  const email = req.body.email;

  const findUser = await User.findOne({ email });
  if (!findUser) {
    const newUser = User.create(req.body);
    res.json(newUser);
  } else {
    throw new Error("user already exists");
  }
});

export const LoginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const findUser = await User.findOne({ email });
  if (findUser && (await findUser.isPasswordMatched(password))) {
    const refreshToken=await GenerateRefreshToken(findUser.id )
    const updatetoken=await User.findByIdAndUpdate(findUser.id,{refreshToken:refreshToken},{new:true})
    res.cookie('refreshToken',refreshToken,{
      httpOnly:true,
      maxAge:72*60*60*1000
    })
    res.json({
      _id: findUser?._id,
      firstname: findUser?.firstname,
      lastname: findUser?.lastname,
      email: findUser?.email,
      mobile: findUser?.mobile,
      token: GenerateToken(findUser?._id),
    });
  } else {
    throw new Error("invalild Credentials");
  }
});

export const LoginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const findAdmin = await User.findOne({ email });
  if(findAdmin.role!=="admin") throw new Error("not authorised")
  if (findAdmin && (await findAdmin.isPasswordMatch(password))) {
    const refreshToken=await GenerateRefreshToken(findAdmin.id )
    const updatetoken=await User.findByIdAndUpdate(findAdmin.id,{refreshToken:refreshToken},{new:true})
    res.cookie('refreshToken',refreshToken,{
      httpOnly:true,
      maxAge:72*60*60*1000
    })
    res.json({
      _id: findAdmin?._id,
      firstname: findAdmin?.firstname,
      lastname: findAdmin?.lastname,
      email: findAdmin?.email,
      mobile: findAdmin?.mobile,
      token: GenerateToken(findAdmin?._id),
    });
  } else {
    throw new Error("invalild Credentials");
  }
});




export const GetUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const getUser = await User.findById(id);
    res.json({ getUser });
  } catch (error) {
    throw new Error(error);
  }
});

export const GetallUser = asyncHandler(async (req, res) => {
  try {
    const getUsers = await User.find().populate("wishlist");
    res.json(getUsers);
  } catch (error) {
    throw new Error(error);
  }
});


export const DeleteUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
  validateMongodbId(id);

    try {
      const deleteUser = await User.findByIdAndDelete(id);
      res.json(deleteUser);
    } catch (error) {
      throw new Error(error);
    }
});


export const UpdateUser = asyncHandler(async (req, res) => {
    const {id}=req.user
    validateMongodbId(id);

    const {firstname,lastname,email,mobile}=req.body;
    try {
      const updateUser = await User.findByIdAndUpdate(id,{
        firstname:firstname,
        lastname:lastname,
        email:email,
        mobile:mobile
      },{
        new:true
      });
      res.json(updateUser);
    } catch (error) {
      throw new Error(error);
    }
});


export const HandleRefreshToken=asyncHandler(async(req,res)=>{
  const {refreshToken}=req.cookies;
  if(!refreshToken) throw new Error('No refresh token')
  const user=await User.findOne({refreshToken})
  if(!user) throw new Error("no refreshtoken in db")
  jwt.verify(refreshToken,process.env.SECRET_KEY,((err,decoded)=>{
    if(err|| user.id!== decoded.id) {throw new Error('refresh token incorrect')}
  }))
  const accessToken= GenerateToken(user.id)
  res.json({accessToken})
})



export const LogoutUser=asyncHandler(
  async(req,res)=>{
    const {refreshToken}=req.cookies
    if(!refreshToken) throw new Error('No refresh token')
    const user=await User.findOne({refreshToken})
    if(!user){
      res.clearCookie("refreshToken",{
        httpOnly:true,
        secure:true
      })
      return res.sendStatus(204)
    }
    await User.findOneAndUpdate({refreshToken},{
      refreshToken:"",
    })
    res.clearCookie("refreshToken",{
      httpOnly:true,
      secure:true
    })
    return res.sendStatus(204)
  }
)



export const UpdatePassword= asyncHandler(
  async(req,res)=>{
    const {id}=req.user
    const {password}=req.body
    const user=await User.findById(id);
    if(password){
      user.password=password
      const updatedPassword=await user.save()
      res.json({
        msg:"pass updated"
      })
    }else{
      res.json(user)
    }
  }
)


export const ForgotPasswordToken=asyncHandler(async(req,res)=>{
    const {email}=req.body;
    const user=await User.findOne({email});
    if(!user) throw new Error("user not present")
    try {
      const token =await user.CreatePassowrdResetToken();
      await user.save();
      const resetUrl=`<p>Follow the given link to reset the password.this link is valid till 10 minutes.</p> <a href=http://localhost:5000/api/user/reset-password/${token}> Click here </a>`
      const data={
        to:email,
        text:"hello",
        subject:"forget password link",
        html:resetUrl
      }
      sendEmail(data)
      res.json(token)
    } catch (error) {
      throw new Error(error)
    }
})

export const ResetPassword=async(req,res)=>{
  const {password}=req.body
  const {token}=req.params
  const hashedToken=crypto.createHash('sha256').update(token).digest("hex")
  const user=await User.findOne({
    passwordResetToken:hashedToken,
    passwordResetExpires:{$gt:Date.now()}
  })
  if(!user) throw new Error("token expired")
  user.password=password
  user.passwordResetToken=undefined;
  user.passwordResetExpires=undefined;
  await user.save();
  res.json(user);
}



export const getWishlist=async(req,res)=>{
  try {
    const {id}=req.user
    const findUser=await User.findById(id).populate('wishlist')
    res.json(findUser)
  } catch (error) {
    throw new Error(error)
  }
}

export const saveAddress=async(req,res)=>{
  const {id}=req.user
  try {
    const updatedUser=await User.findByIdAndUpdate(id,{address:req.body.address},{new:true})
    res.json(updatedUser)
  } catch (error) {
    throw new Error(error)
  }
}


export const addtoCart=async(req,res)=>{
  const { cart } = req.body;
  const { _id } = req.user;
  try {
    let products = [];
    const user = await User.findById(_id);
    // check if user already have product in cart
    const alreadyExistCart = await Cart.findOne({ orderby: user._id });
    if (alreadyExistCart) {
      alreadyExistCart.deleteOne();
    }
    for (let i = 0; i < cart.length; i++) {
      let object = {};
      object.product = cart[i]._id;
      object.count = cart[i].count;
      object.color = cart[i].color;
      let getPrice = await Product.findById(cart[i]._id).select("price").exec();
      object.price = getPrice.price;

      console.log(object);  
      products.push(object);
    }
    let cartTotal = 0;
    for (let i = 0; i < products.length; i++) {
      cartTotal = cartTotal + products[i].price * products[i].count;
    }
    
    let newCart = await new Cart({
      products,
      cartTotal,
      orderby: user?._id,
    }).save();
    res.json(newCart);
  } catch (error) {
    throw new Error(error);
  }
}

export const getUserCart=async(req,res)=>{
  const {id}=req.user
  try {
    const cart=await Cart.findOne({orderby:id}).populate("products.product")
    res.json(cart)
  } catch (error) {
    throw new Error(error)
  }
}

export const emptyCart=async(req,res)=>{
  const {id}=req.user
  try {
    const user=await User.findOne({id})
    const cart=await Cart.findByIdAndRemove({orderby:user.id})
    res.json(cart)
  } catch (error) {
    throw new Error(error)
  }
}


export const CreateOrder=async(req,res)=>{
  const { COD } = req.body;
  const { id } = req.user;

  try {
    if (!COD) throw new Error("Create cash order failed");
    const user = await User.findById(id);
    let userCart = await Cart.findOne({ orderby: user.id });
    let finalAmout = 0;
    finalAmout = userCart.cartTotal;

    let newOrder = await new Order({
      products: userCart.products,
      paymentIntent: {
        id: uniqid(),
        method: "COD",
        amount: finalAmout,
        status: "Cash on Delivery",
        created: Date.now(),
        currency: "usd",
      },
      orderby: user.id,
      orderStatus: "Cash on Delivery",
    }).save();
    console.log("new order cart",newOrder);
    let update = newOrder.products.map((item) => {
      return {
        updateOne: {
          filter: { id: item.product._id },
          update: { $inc: { quantity: -item.count, sold: +item.count } },
        },
      };
    });
    const updated = await Product.bulkWrite(update, {});
    res.json({ message: "success" });
  } catch (error) {
    throw new Error(error);
  }
}

export const getaOrder=async(req,res)=>{
  const { id } = req.user;
  try {
    const userorders = await Order.findOne({ orderby: id })
      .populate("products.product")
      .populate("orderby")
      .exec();
    res.json(userorders);
  } catch (error) {
    throw new Error(error)
  }
}

export const getAllOrders = asyncHandler(async (req, res) => {
  try {
    const alluserorders = await Order.find()
      .populate("products.product")
      .populate("orderby")
      .exec();
    res.json(alluserorders);
  } catch (error) {
    throw new Error(error);
  }
});



export const updateOrderStatus=async(req,res)=>{
  const {status}=req.body;
  const {id}=req.params
  try {
    const updateOrderStatus=await Order.findByIdAndUpdate(id,{
      orderStatus:status,
      paymentIntent:{
        status:status,
      }
    },{new:true})
    res.json(updateOrderStatus)
  } catch (error) {
    throw new Error(error)
  }
}





