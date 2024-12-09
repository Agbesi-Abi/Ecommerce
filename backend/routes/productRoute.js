import express from 'express';
import {addProduct, listProduct, removeProduct, singleProduct} from '../controllers/productControllers.js'
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const productRouter = express.Router();
productRouter.post('/add',adminAuth,upload.fields([{name:'Image1', maxCount:1},{name:'Image2', maxCount:1},{name:'Image3', maxCount:1},{name:'Image4', maxCount:1}]), addProduct);
productRouter.post('/remove',adminAuth, removeProduct);
productRouter.post('/single', singleProduct);
productRouter.get('/list', listProduct);

export default productRouter