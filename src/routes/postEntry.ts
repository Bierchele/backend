import express from "express";
import { build } from "../mongoUtilities/mongoUtilities";
import cors from "cors";
const postRouter = express.Router();
postRouter.use(cors());

postRouter.post("/", async (req, res, next) => {
  if (req.body === undefined) {
    res.send("Sie haben eine Bambusleitung");
  } else {
    const data = build( req.body);
    console.log(data)
    await data.save();
    return res.status(201).send(data);
  }
  next();
});

export { postRouter };
