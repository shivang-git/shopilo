import express from "express";
const router=express.Router();

import { CreateProduct, DeleteProduct, GetAllProduct, GetProduct, UpdateProduct, addWishlist, uploadImages } from "../controllers/productController.js";
import { AuthMiddleware, IsAdmin } from "../middlewares/authMiddleware.js";
import { productImageResize,uploadImage } from "../middlewares/uploadImage.js";


router.get('/all-products',GetAllProduct)
router.get('/:id',GetProduct)
router.post('/create-product',AuthMiddleware,IsAdmin,CreateProduct)
router.put('/:id',AuthMiddleware,IsAdmin,UpdateProduct)
router.delete('/:id',AuthMiddleware,IsAdmin,DeleteProduct)
router.put('/wishlist',AuthMiddleware,addWishlist)
router.put('/upload/:id',uploadImage.array('images',10),uploadImages)
export default router