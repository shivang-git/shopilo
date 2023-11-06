import express from "express";
const router=express.Router();

import { CreateUser } from "../controllers/UserController.js";

router.post('/register',CreateUser);



export default router;