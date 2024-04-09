const express=require('express');
const app=express();
const userRouter=require("./routes/users.route");

app.use("/api/users", userRouter);

app.get('/', (req, res)=>{
    res.send("home router");
})


app.use( (req, res)=>{
    res.send("404 error");
})

module.exports=app;