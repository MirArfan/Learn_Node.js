const express=require('express');
const app=express();

app.get('/', (req, res)=>{
    res.send("home router");
})

app.get('/about', (req, res)=>{
    res.send("About router");
})
app.post('/', (req, res)=>{
    res.send("post router");
})
app.put('/', (req, res)=>{
    res.send("put router");
})
app.delete('/', (req, res)=>{
    res.send("delete router");
})

module.exports=app;