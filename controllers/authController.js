import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const env = dotenv.config().parsed;


const generateAccessToken = async (payload) => {
    return jwt.sign(payload, env.JWT_ACCESS_TOKEN_SECRET, {expiresIn: env.JWT_ACCESS_TOKEN_LIFE})
}
const generateRefreshToken = async (payload) => {
    return jwt.sign(payload, env.JWT_REFRESH_TOKEN_SECRET, {expiresIn: env.JWT_REFRESH_TOKEN_LIFE})
}

const register = async (req, res) => {
    try {
        const {username, email, password, rePassword} = req.body;
        if(!username) throw {code: 428, message: 'USERNAME_REQUIRED'};
        if(!email) throw {code: 428, message: 'EMAIL_REQUIRED'};
        if(!password) throw {code: 428, message: 'PASSWORD_REQUIRED'};
        if(!rePassword) throw {code: 428, message: 'REPASSWORD_REQUIRED'};
        if(password !== rePassword) throw {code: 500, message: 'PASSWORD_AND_REPASSWORD_MUST_MATCH'}

        const userExist = await User.findOne({username})
        const emailExist = await User.findOne({email})
        if(userExist) throw {code: 409, message: 'USER_ALREADY_EXIST'}
        if(emailExist) throw {code: 409, message: 'EMAIL_ALREADY_EXIST'}

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
    
        const newUser = new User({
            username,
            email,
            password: hash
        });
        const user = await newUser.save()
        if(!user) throw {code: 500, message: 'failed user add'}
    
        res.status(200).json({
            status: true,
            user
        })  
    } catch (error) {
        res.status(error.code).json({
            status: false,
            message: error.message
        })
    }
}

const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        if(!username || !password) throw {code: 428, message: 'USERNAME_AND_PASSWORD_REQUIRED'};

        const user = await User.findOne({$or: [{username}, {email: username}]});
        if(!user) throw {code: 500, message: 'USER_NOT_FOUND'};
        const Password = await bcrypt.compare(password, user.password);
        if(!Password) throw {code: 401, message: 'PASSWORD_WRONG'};

        const payload = {id: user._id, role: user.role};
        const accessToken = await generateAccessToken(payload)
        const refreshToken = await generateRefreshToken(payload)

        res.status(200).json({
            status: true,
            accessToken,
            refreshToken
        })  
    } catch (error) {
        res.status(error.code).json({
            status: false,
            message: error.message
        })
    }
}
const refreshToken = async (req, res) => {
    try {
        const verify = jwt.verify(req.body.refreshToken, env.JWT_REFRESH_TOKEN_SECRET);
        if(!verify) throw {code: 401, message: 'REFRESH_TOKEN_INVALID'}

        const payload = {id: verify.id, role: verify.role}
        const accessToken = await generateAccessToken(payload)
        const refreshToken = await generateRefreshToken(payload)

        res.status(200).json({
            status: true,
            accessToken,
            refreshToken
        })  
    } catch (error) {
        if(!error.code) {
            error.code = 500;
            error.message = 'INVALID'
        }
        res.status(error.code).json({
            status: false,
            message: error.message
        })
    }
}


export {register, login, refreshToken};
