import mongoose, { mongo } from "mongoose";

export const connectDB = () =>{
    mongoose.set('strictQuery', true)
    mongoose.connect('mongodb://127.0.0.1:27017/productManagerDB', {
        retryWrites: true
    })
    .then(() =>console.log('Connected to DB'))
    .catch((err) => console.log(err))
}

export default connectDB