import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import { GenerateToken } from "../config/jwtToken.js";

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

export const LoginUer = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const findUser = await User.findOne({ email });
  if (findUser && (await findUser.isPasswordMatch(password))) {
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
    try {
      const deleteUser = await User.findByIdAndDelete(id);
      res.json(deleteUser);
    } catch (error) {
      throw new Error(error);
    }
});


export const UpdateUser = asyncHandler(async (req, res) => {
    const {id}=req.user
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