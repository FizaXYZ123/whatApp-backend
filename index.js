const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');


const app = express();
const PORT = 5000


// database connection
mongoose.connect("mongodb://localhost:27017/whatsApp").then(()=>console.log('mongoDB connected successfully')).catch((err)=>console.log(err))


app.get("/",(req,res)=>{
    return res.send("hello to whatsapp")
})

app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`)
})