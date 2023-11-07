import express from "express";
const router=express.Router();

import { RegisterUser, LoginUer, GetUser, GetallUser, DeleteUser, UpdateUser } from "../controllers/UserController.js";

router.post('/register',RegisterUser);
router.post('/login',LoginUer);
router.get('/all-users',GetallUser)
router.get('/:id',GetUser)
router.delete('/:id',DeleteUser)
router.put('/:id',UpdateUser)

export default router;