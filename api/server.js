import express from "express";
import colors from 'colors';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js';
import mongoConnection from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.js";
import cookieParser from "cookie-parser";
import userProfileRoute from "./routes/userProfileRoute.js";
import cors from 'cors';


const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use(cookieParser());
app.use(cors())

const PORT = process.env.SERVER_PORT || 5000;

app.use(express.static('api/public/'));
app.use('/api/v1/user', userRoute)
app.use('/api/v1/user/profile', userProfileRoute)

app.use( errorHandler )

app.listen(PORT,()=>{
    mongoConnection();
    console.log(`Server is running on port ${PORT}`.bgGreen.black);
})