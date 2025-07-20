import express from "express";
import mongoose from "mongoose";
import router from "./routes/Studentroutes/Auth.js";
import cookieParser from "cookie-parser";
import cors from "cors"
const app=express();
const port=9901;
const url="mongodb+srv://adnanahmed2578:WGfLQHotnvOjF7u8@cluster0.y4czkva.mongodb.net/";
app.use(cors(
    {
        origin:'http://localhost:5173',  // Your React frontend URL
    credentials: true,
    
    }
 ))
app.use(express.json())
app.use(cookieParser());
app.use("/api/auth",router)
const connect=mongoose.connect(url)
.then(()=>
{
    
    console.log("we are connected")
    app.listen(port,()=>

{
    console.log(` we are on port ${port}`)
})
})
.catch((e)=>
{
    console.log(e)
})
 