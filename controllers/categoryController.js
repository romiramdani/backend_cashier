import Category from "../models/Category.js";


const index = async (req, res) => {
    try {
        const categories = await Category.find({status: 'active'})

        if(!categories) throw {code: 500, message: "Categories not found"}

        return res.status(200).json({
            status: true,
            total: categories.length,
            categories
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
        const {title} = req.body;
        if(!title) throw { code: 428, message: "Title is required!" }

        const categoryExists = await Category.findOne({title: title})
        if(categoryExists) throw {code: 409, message: "Category already exist"}

        const newCategory = new Category({
            title
        })
        const category = await newCategory.save()
        if(!category) throw {code: 500, message: "Store Category failed"}

        return res.status(200).json({
            status: true,
            category
        })

    } catch (err) {
        return res.status(err.code).json({
            status: false,
            message: err.message
        })
    }
}

export {index, store}
