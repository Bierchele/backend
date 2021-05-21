import express, { Router }  from 'express';
import {scanner} from '../barcodeDevice';
import cors from "cors";
const getRouter = express.Router();
getRouter.use(cors())

getRouter.get('/', (req, res, next) => {
    res.json(scanner.getEntries());
})

export {getRouter};