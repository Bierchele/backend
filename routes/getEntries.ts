import express, { Router }  from 'express';
import scanner from '../barcodeDevice';
const getRouter = express.Router();
const print = scanner.getEntries;


getRouter.get('/', (req, res, next) => {
    res.json(print());
    next();
})

module.exports = getRouter;