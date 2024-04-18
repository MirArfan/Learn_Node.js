// import chalk from 'chalk';
// const os = require("os")
// const chalk = require("chalk")

const express=require("express");

const app=express();

const PORT=3000;


app.get("/test", (req, res)=>{
    res.send("jjj");
})


app.listen(PORT, ()=>{
    console.log("jjj");
})
