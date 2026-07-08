import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import cors from "cors";

const app = express();

dotenv.config();

app.use(express.json())

app.use(cors({
origin : "http://localhost:5173",
methods:["POST","GET","PUT","PATCH","DELETE"],
credentials: true
}
));

const PORT = process.env.PORT;
const URI = process.env.MONGODB_URI

try {
    mongoose.connect(URI).then(console.log("mongoDB connected"))
} catch (error) {
    console.log("error",error)
}

app.use("/user",userRoute);

app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))