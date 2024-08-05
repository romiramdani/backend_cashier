import express from "express";
const route = express.Router();

import categoriesRoutes from "./categories.js";
import productsRoutes from "./products.js";
import authRoutes from "./auth.js";

route.use('/categories', categoriesRoutes);
route.use('/products', productsRoutes);
route.use('/auth', authRoutes);

route.use('/', (req, res) => {
    res.send('Hello world')
})

export default route;