import express from "express";
import mongoose from "mongoose";
const app=express();
const port=9901;
const url="mongodb+srv://adnanahmed2578:WGfLQHotnvOjF7u8@cluster0.y4czkva.mongodb.net/";
const connect=mongoose.connect(url)
.then(()=>
{
    
    console.log("we are ")
    app.listen(port,()=>
{
    console.log(` we are on port ${port}`)
})
})
.catch((e)=>
{
    console.log(e)
})
 