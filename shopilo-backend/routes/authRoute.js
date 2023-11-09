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

  userCart,
  getUserCart,
  emptyCart,
  CreateOrder,
  getOrders,
  updateOrderStatus,
} from "../controllers/UserController.js";

router.post("/register", RegisterUser);
router.post("/login", LoginUser);
router.post("/admin-login", LoginAdmin);
router.post('/cart',AuthMiddleware,userCart)
router.post('/cart/create-cart',AuthMiddleware,CreateOrder)
router.get("/all-users", GetallUser);
router.get("/refresh", HandleRefreshToken);
router.get("/logout", LogoutUser);
router.get("/wishlist", AuthMiddleware, getWishlist);
router.get("/:id", AuthMiddleware, IsAdmin, GetUser);
router.get('/cart',AuthMiddleware,getUserCart)
router.get('/get-orders',getOrders)
router.delete("/:id", DeleteUser);
router.delete('/empty-cart',AuthMiddleware,emptyCart)
router.put("/update-user", AuthMiddleware, IsAdmin, UpdateUser);
router.put("/save-address", AuthMiddleware, saveAddress);
router.put("/reset-password", AuthMiddleware, UpdatePassword);
router.put("/reset-password/:token", ResetPassword);
router.put('/order/update-order/:id',AuthMiddleware,IsAdmin,updateOrderStatus)
router.post("/forgot-password", ForgotPasswordToken);

export default router;
