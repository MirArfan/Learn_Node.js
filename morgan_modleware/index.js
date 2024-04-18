const express=require("express");
const morgan = require("morgan");
const app=express();

const PORT=3000;
app.use(morgan("tiny"));

app.get("/test", (req, res)=>{
    res.send("jjj");
})

app.listen(PORT, ()=>{
    console.log("running");
})