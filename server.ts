import express, { json } from "express";
var cors = require('cors')
const app = express();
const port = process.env.Port || 3000;
const postRouter = require('./routes/postEntry');
const getRouter = require('./routes/getEntries');
app.use(express.json());
app.use('/postEntry', postRouter);
app.use('/getEntries', getRouter);
app.use(cors())

app.post('/postEntry', (req, res, next) => {
  next(); 
});
app.get('/getEntries', (req, res, next) => {
    next();
})

app.listen(port, ()=>{
   console.log(`the app listens to localhost:${port}`) 
})