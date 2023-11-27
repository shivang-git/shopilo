import express from "express";
const router=express.Router();

import { CreateProduct, DeleteProduct, GetAllProduct, GetProduct, UpdateProduct, addWishlist } from "../controllers/productController.js";
import { AuthMiddleware, IsAdmin } from "../middlewares/authMiddleware.js";
import { productImageResize,uploadImage } from "../middlewares/uploadImage.js";
import { uploadImages } from "../controllers/uploadController.js";

router.post("/", AuthMiddleware, IsAdmin, CreateProduct);
router.get("/:id", GetProduct);
router.get("/", GetAllProduct);
router.put("/wishlist", AuthMiddleware, addWishlist);
router.put("/:id", AuthMiddleware, IsAdmin, UpdateProduct);
router.delete("/:id", AuthMiddleware, IsAdmin, DeleteProduct);



export default router;