import mongoose from "mongoose";
import express from 'express';
import dotenv from 'dotenv';
import config from '../../../../Config'

const app = express();
dotenv.config();


export const connection = mongoose.connect(config.MONGO_URI, () => {
    console.log("Connection with mongodb was succesfull")
})


