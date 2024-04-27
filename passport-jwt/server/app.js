const express=require("express");
const app=express();
const cors=require("cors");
const bcrypt=require("bcrypt");
const saltRounds = 10;

require("./config/database")

app.use(cors());
app.use(express.urlencoded({extended: true}))



module.exports=app;