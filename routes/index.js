import express from "express";
const route = express.Router();

import categoriesRoutes from "./categories.js";
import productsRoutes from "./products.js";

route.use('/categories', categoriesRoutes);
route.use('/products', productsRoutes);

route.use('/', (req, res) => {
    res.send('Hello world')
})

export default route;