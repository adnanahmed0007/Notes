import express from "express";
const app=express();
const port=9901;
app.listen(port,()=>
{
    console.log(` we are on port ${port}`)
})