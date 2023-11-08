import express from "express";
const router=express.Router();

import { AuthMiddleware, IsAdmin } from "../middlewares/authMiddleware.js";
import { RegisterUser, LoginUser, GetUser, GetallUser, DeleteUser, UpdateUser, HandleRefreshToken, LogoutUser } from "../controllers/UserController.js";


router.post('/register',RegisterUser);
router.post('/login',LoginUser);
router.get('/all-users',GetallUser)
router.get('/refresh',HandleRefreshToken)
router.get('/logout',LogoutUser);
router.get('/:id',AuthMiddleware,IsAdmin,GetUser)
router.delete('/:id',DeleteUser)
router.put('/update-user',AuthMiddleware,UpdateUser)

export default router;