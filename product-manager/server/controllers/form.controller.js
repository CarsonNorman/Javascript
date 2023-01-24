import Product from "../models/product.model.js"

export const findAllProducts = (req, res) => {
    Product.find()
        .then((response) => res.status(201).json(response))
        .catch((err) => res.status(400).json({error: err}))
}

export const createProduct = (req, res) =>{
    Product.create(req.body)
    .then(response => res.status(201).json(response))
    .catch(err => res.status(400).json({error: err}))
}

export const findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(product => res.json({ product: product }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}


export const updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body,{ new: true, runValidators: true })
        .then(product => res.json({ product: product}))
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

export const deleteProduct = (req, res) => {
    Product.findOneAndDelete({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

export default { findAllProducts, createProduct, updateProduct, findOneProduct, deleteProduct } 