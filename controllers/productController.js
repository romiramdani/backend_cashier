import Product from "../models/Product.js";
import Category from "../models/Category.js";



const index = async (req, res) => {
    try {
        const products = await Product.find({status: 'active'})

        if(!products) throw {code: 500, message: "Products not found"}

        return res.status(200).json({
            status: true,
            total: products.length,
            products
        })

    } catch (err) {
        return res.status(err.code).json({
            status: false,
            message: err.message
        })
    }
}

const store = async (req, res) => {
    try {
        const {title, thumbnail, description, brand, price, } = req.body;


        const category = await Category.findOne({title: {$regex: new RegExp(req.body.category, 'i')}});
        if(!category) throw {code: 422, message:'Category Invalid'};

        const productExists = await Product.findOne({title: title})
        if(productExists) throw {code: 409, message: 'Product already exists'}

        const newProduct = new Product({
            title,
            brand,
            thumbnail,
            description,
            price,
            categoryId: category._id
        })
        const product = await newProduct.save()
        if(!product) throw {code: 500, message: "Store Product failed"}

        return res.status(200).json({
            status: true,
            product,
        })

    } catch (err) {
        return res.status(err.code).json({
            status: false,
            message: err.message
        })
    }
}

export {index, store}