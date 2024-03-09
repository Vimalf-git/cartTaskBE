import express from 'express';
import productRoute from './Product/ProductRouter.js'
const route=express();

route.use('/',productRoute)

export default route;