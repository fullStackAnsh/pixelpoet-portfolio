const connectDb = require('./db');
const express=require('express');
const cors = require('cors');
const loginRoute = require('./routes/login');
const app=express();
app.use(cors());
app.use(express.json());
require('dotenv').config(); 
connectDb(process.env.MONGODB_URI);
app.use('/login',loginRoute);


app.listen(process.env.PORT,()=>{
    console.log("working");
});