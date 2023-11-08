import express from "express";
const router=express.Router();

import { AuthMiddleware, IsAdmin } from "../middlewares/authMiddleware.js";

import { RegisterUser, LoginUer, GetUser, GetallUser, DeleteUser, UpdateUser } from "../controllers/UserController.js";

router.post('/register',RegisterUser);
router.post('/login',LoginUer);
router.get('/all-users',GetallUser)
router.get('/:id',AuthMiddleware,IsAdmin,GetUser)
router.delete('/:id',DeleteUser)
router.put('/update-user',AuthMiddleware,UpdateUser)

export default router;