import express from 'express'
import { uploadImages, deleteImages } from "../controllers/uploadController.js";
import { IsAdmin, AuthMiddleware } from "../middlewares/authMiddleware.js";
import { uploadImage, productImageResize } from "../middlewares/uploadImage.js";
const router = express.Router();

router.post("/", uploadImage.array("images", 10), productImageResize, uploadImages);
router.delete("/delete-img/:id", AuthMiddleware, IsAdmin, deleteImages);

export default router