import express from 'express';
const app = express();


import dotenv from 'dotenv'
dotenv.config()

import cors from 'cors'
app.use(cors(), express.json())

import connectDB from './server/config/mongoose.config.js';
connectDB();

import formRouter from './server/routes/product.routes.js'
app.use('/api', formRouter)


const port = process.env.PORT || 8000
app.listen(port, () => console.log(`Listening on port: ${port}`) );
