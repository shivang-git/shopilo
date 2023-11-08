import express from "express";
const router=express.Router();

import { CreateProduct, DeleteProduct, GetAllProduct, GetProduct, UpdateProduct } from "../controllers/productController.js";
import { AuthMiddleware, IsAdmin } from "../middlewares/authMiddleware.js";


router.get('/all-products',GetAllProduct)
router.get('/:id',GetProduct)
router.post('/create-product',AuthMiddleware,IsAdmin,CreateProduct)
router.put('/:id',AuthMiddleware,IsAdmin,UpdateProduct)
router.delete('/:id',AuthMiddleware,IsAdmin,DeleteProduct)
export default router