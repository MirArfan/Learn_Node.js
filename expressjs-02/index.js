// const app=require('./app')
const express=require("express");
const app=express();

const port=3000;


app.get("/products/:id([0-9]+)", (req, res)=>{
    res.send(` id = ${req.params.id}`);
})

app.use("*", (req, res)=>{
    res.status(404).send({
        message: "not valid route"
    })
})

app.listen(port, ()=>{
    console.log("server is runnig at 3000 port");
})