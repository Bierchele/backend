import express, { json } from "express";
import { postRouter } from "./routes/postEntry";
import { getRouter } from "./routes/getEntries";

const  cors = require('cors')
const app = express();
const port = process.env.Port || 8080;

app.use(json());
app.use(cors());

app.use('/postEntry', postRouter);
app.use('/getEntries', getRouter);

app.listen(port, ()=>{
   console.log(`the app listens to localhost:${port}`) 
});
