import express, { json } from "express";
const app = express();
import cors from "cors";
const port = process.env.Port || 8080;
import { postRouter } from "./routes/postEntry";
import { getRouter } from "./routes/getEntries";
app.use(express.json());
app.use("/entry", postRouter);
app.use("/entries", getRouter);
app.use(cors());

app.post("/entry", (req, res, next) => {});
app.get("/entries", (req, res, next) => {});
app.listen(port, () => {
  console.log(`the app listens to localhost:${port}`);
});
 