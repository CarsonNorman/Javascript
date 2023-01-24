import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    title : {
        type : String,
        required: [true, 'Please enter a title']
    },
    price : {
        type : Number,
        required: [true, 'Please enter a price']
    },
    description : {
        type: String,
        required: [true, 'Please enter a description']
    },
    
},{timestamps: true})

const Product = model('Product', productSchema)
 
export default Product;