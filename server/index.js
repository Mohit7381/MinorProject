
import express from 'express';
import bodyParser from 'body-parser';
import jsonwebtoken from 'jsonwebtoken';
import connectDB from './Config/db.js';
import { notFound,errorHandler } from './middleware/ErrorHandler.js';
import dotenv from 'dotenv';
const app = express();
connectDB();
dotenv.config();
app.use(errorHandler)
app.use(notFound)
app.use(express.urlencoded({extended:true}));

app.get('/',()=>{
    console.log('Hello World');
})
const Port=process.env.PORT || 8080;
app.listen(Port, () => {console.log(`Server is running on port ${Port}`)});

