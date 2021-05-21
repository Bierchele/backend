import express from "express";
import {scanner} from '../barcodeDevice';
const postRouter = express.Router();
import cors from "cors";
postRouter.use(cors())

postRouter.post('/',(req, res, next) => {
    if(!req.body){
        res.status(400).send("Sie haben eine Bambusleitung")
    }
    res.send(req.body)
    scanner.postEntry(req.body.barcode);
    next();
})

export {postRouter};