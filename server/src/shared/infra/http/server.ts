import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import { connection } from "../mongoose/connection";
import config from '../../../../Config'

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

connection


app.listen(process.env.PORT, () => {
    console.log(`App is listenning port ${config.PORT}`);
})