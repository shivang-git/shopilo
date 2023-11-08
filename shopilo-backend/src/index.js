import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import AuthRouter from '../routes/authRoute.js';



//db connection
import connectDB from '../config/dbConnect.js';
import { errorHandler, notFound } from '../middlewares/errorHandler.js';
connectDB();


const app=express();
const PORT=process.env.PORT;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(cookieParser())

app.use('/api/user',AuthRouter)

//Routes

//middleware

app.use(notFound)
app.use(errorHandler)








//Listening to server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})