// blog feature-----------------------filter,sort,limit feature--------------------isblocked feature-----brand----------blog category-------rating


import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import AuthRouter from '../routes/authRoute.js';
import ProductRouter from '../routes/productRoute.js';
import categoryRouter from '../routes/categoryRoute.js'
import UploadRouter from '../routes/uploadRoute.js'
import cors from 'cors'
//db connection
import connectDB from '../config/dbConnect.js';
import { errorHandler, notFound } from '../middlewares/errorHandler.js';
connectDB();


const app=express();
const PORT=process.env.PORT;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cookieParser())

app.use('/api/user',AuthRouter)
app.use('/api/product',ProductRouter)
app.use('/api/category',categoryRouter)
app.use('/api/upload',UploadRouter)
//Routes

//middleware

app.use(notFound)
app.use(errorHandler)







//Listening to server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})