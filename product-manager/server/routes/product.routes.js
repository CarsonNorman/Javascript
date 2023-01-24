import { createProduct, findAllProducts, findOneProduct, deleteProduct, updateProduct }  from '../controllers/form.controller.js'

import express from 'express'
export const formRouter = express.Router()

formRouter
    .route('/products')
    .post(createProduct)
    .get(findAllProducts)

formRouter
    .route('/products/:id')
    .get(findOneProduct)
    .put(updateProduct)
    .delete(deleteProduct)


    

export default formRouter