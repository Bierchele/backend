import express, { Router }  from 'express';
import { barcode } from "../mongoUtilities/mongoUtilities";
import cors from "cors";
const getRouter = express.Router();
getRouter.use(cors())

getRouter.get('/', async (req, res, next) => {
  const data = await barcode.find({}, {_id: 0})
  return res.status(200).send(data)
})

export {getRouter};