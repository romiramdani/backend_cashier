import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"

import route from "./routes/index.js";

const app = express();
const env = dotenv.config().parsed;

mongoose.connect(`${env.MONGODB_URI}${env.MONGODB_HOST}:${env.MONGODB_PORT}/${env.MONGODB_DB}`)
    .then(() => {
        console.log('Connected to mongodb')
    }) .catch((err) => {
        console.log(err)
    });

app.use(express.json());
app.use(express.urlencoded( {extended: true} ));
app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use('/', route);

app.listen(env.APP_PORT, () => {
    console.log(`server running on port ${env.APP_PORT}`)
});