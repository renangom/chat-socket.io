import mongoose from "mongoose";
import express from 'express';
import dotenv from 'dotenv';
import config from '../../../../Config'

const app = express();
dotenv.config();


mongoose.connect(config.MONGO_URI)