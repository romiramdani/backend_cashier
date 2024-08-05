import express from "express";
const route = express.Router();

import categoriesRoutes from "./categories.js"

route.use('/categories', categoriesRoutes);

route.use('/', (req, res) => {
    res.send('Hello world')
})

export default route;