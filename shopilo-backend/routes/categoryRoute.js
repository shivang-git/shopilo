import express from 'express';
import { createCategory, deleteCategory, getCategory, getallCategory, updateCategory } from '../controllers/categoryController.js';
import { AuthMiddleware, IsAdmin } from '../middlewares/authMiddleware.js';

const router=express.Router();

router.post('/create-category',createCategory)
router.put('/:id',updateCategory)
router.delete('/:id',deleteCategory)
router.get('/categories',getallCategory)
router.get('/:id',getCategory)



export default router;