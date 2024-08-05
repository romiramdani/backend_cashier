import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    role: {
        type: String,
        enum: ['employee', 'cashier', 'admin'],
        default: 'employee'
    },
    createdAt: {
        type: Number
    },
    updateAt: {
        type: Number
    },
},
{
    timestamps: {
        currentTime: () => Math.floor(Date.now() / 1000),
    }, 
})

const User = new mongoose.model('user', Schema);

export default User;