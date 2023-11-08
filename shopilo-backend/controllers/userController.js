import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import jwt from 'jsonwebtoken'
import { GenerateToken } from "../config/jwtToken.js";
import { validateMongodbId } from "../utils/validateMongodb.js";
import { GenerateRefreshToken } from "../config/refreshToken.js";



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
  if (findUser && (await findUser.isPasswordMatch(password))) {
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
    const getUsers = await User.find();
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