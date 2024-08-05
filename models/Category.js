import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title: {
        type: String
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
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

const Category = new mongoose.model('category', Schema);

export default Category;