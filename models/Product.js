import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema;

const Schema = new mongoose.Schema({
    title: {
        type: String
    },
    thumbnail: {
        type: String
    },
    description: {
        type: String
    },
    brand: {
        type: String
    },
    price: {
        type: Number
    },
    categoryId: [{
        type: ObjectId,
        ref: 'category'
    }],
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

const Product = new mongoose.model('product', Schema);

export default Product