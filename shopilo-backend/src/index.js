import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import bodyParser from 'body-parser';

import AuthRouter from '../routes/authRoute.js';



//db connection
import connectDB from '../config/dbConnect.js';
connectDB();


const app=express();
const PORT=process.env.PORT;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



//Routes
app.use('/api/user',AuthRouter)










//Listening to server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})