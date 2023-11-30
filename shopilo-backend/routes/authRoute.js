import express from "express";
const router = express.Router();

import { AuthMiddleware, IsAdmin } from "../middlewares/authMiddleware.js";
import {
  RegisterUser,
  LoginUser,
  GetUser,
  GetallUser,
  DeleteUser,
  UpdateUser,
  HandleRefreshToken,
  LogoutUser,
  UpdatePassword,
  ForgotPasswordToken,
  ResetPassword,
  LoginAdmin,
  getWishlist,
  saveAddress,
  getUserCart,
  emptyCart,
  CreateOrder,
  getAllOrders,
  updateOrderStatus,
  getaOrder,
  addtoCart,
} from "../controllers/UserController.js";

router.post('/register', RegisterUser);
router.post("/login", LoginUser);
router.post("/admin-login", LoginAdmin);
router.post('/cart/create',AuthMiddleware,CreateOrder)
router.post('/cart',AuthMiddleware,addtoCart)
router.get("/all-users", GetallUser);
router.get("/refresh", HandleRefreshToken);
router.get("/logout", LogoutUser);
router.get("/wishlist", AuthMiddleware, getWishlist);

router.get('/get-orders',AuthMiddleware, IsAdmin,getaOrder)
router.get('/getallorders',AuthMiddleware,IsAdmin,getAllOrders)
router.get("/:id", AuthMiddleware, IsAdmin, GetUser);
router.get('/cart',AuthMiddleware,getUserCart)
router.delete("/:id", DeleteUser);
router.delete('/empty-cart',AuthMiddleware,emptyCart)
router.put("/update-user", AuthMiddleware, IsAdmin, UpdateUser);
router.put("/save-address", AuthMiddleware, saveAddress);
router.put("/reset-password", AuthMiddleware, UpdatePassword);
router.put("/reset-password/:token", ResetPassword);
router.put('/order/update-order/:id',AuthMiddleware,IsAdmin,updateOrderStatus)
router.post("/forgot-password", ForgotPasswordToken);

export default router;
