import express from "express";
const route = express.Router();

route.use('/', (req, res) => {
    res.send('Hello world')
})

export default route;