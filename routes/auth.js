import express from "express"
import { register, login, refreshToken } from "../controllers/authController.js";

const route = express.Router();

route.post('/register', register);
route.post('/login', login);
route.post('/refresh-token', refreshToken);

export default route;