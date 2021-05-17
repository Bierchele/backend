import express from "express";
import { builtinModules } from "module";
import scanner from '../barcodeDevice';
const postRouter = express.Router();
const scan = scanner.postEntry;
postRouter.use(express.json());

postRouter.post('/',(req, res, next) => {
    if(!req.body){
        res.status(400).send("Sie haben eine Bambusleitung")
    }
    res.send(req.body)
    scan(req.body.barcode);
    next();
})


module.exports = postRouter;