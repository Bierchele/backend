import { Router } from 'express';
import { scanner } from '../barcodeDevice';

const getRouter = Router();

getRouter.get('/', (req, res, next) => {
    res.json(scanner.getEntries());
})

export { getRouter }
