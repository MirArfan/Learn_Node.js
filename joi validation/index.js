const express=require("express");
const joi = require("joi");
const userRouter = require("./routes/user");
const app=express();
const PORT=3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(userRouter);

app.listen(PORT, ()=>{
    console.log("ser is runing");
})
