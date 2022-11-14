import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';


const app = express();
app.use(cors());
dotenv.config();




app.listen(4000, () => {
    console.log("App is listenning port 4000");
})