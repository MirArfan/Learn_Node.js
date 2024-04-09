const express=require('express');
const app=express();
const userRouter=require("./routes/users.route");

app.use("/api/users", userRouter);

app.get('/', (req, res)=>{
    // res.send("home page");
    res.statusCode=200;
    res.sendFile(__dirname+"/views/home.html")

})


app.get('/login', (req, res)=>{
    // res.send("home page");
   res.cookie("name :", "Rahat");
   res.cookie("age :", "27");
   res.end();

})

app.get('/register', (req, res)=>{

   res.statusCode=200;
    res.sendFile(__dirname+"/views/register.html")

    // res.status(200).json({
    //     message:"i am from register page",
    //     statusCode:200,
    // })
    // res.send("register page");
})

app.use( (req, res)=>{
    res.send("404 error");
})

module.exports=app;