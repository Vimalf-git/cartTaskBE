import express from 'express';
import ProductController from '../../Controller/Product/ProductController.js';
const route=express();

route.post('/postproduct',ProductController.postProduct);
route.get('/getproduct',ProductController.getProduct);

export default route;