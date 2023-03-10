import express from "express";
const app = express()

import  connectDB  from "./config/mongoose.config.js";
connectDB();

import cors from 'cors'
app.use(cors(), express.json())

import authorRouter from "./routes/authors.routes.js";
app.use('/api', authorRouter)

const port = 8000;
app.listen(port, () =>console.log(`listening on port: ${port}`))