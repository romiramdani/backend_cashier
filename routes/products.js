;import express from "express";
import {index, store} from "../controllers/productController.js";
const route = express.Router();

route.get('/', index);
route.post('/', store);

export default route;