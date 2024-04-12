const bodyParser = require("body-parser");
const express=require("express");
const app=express();
const PORT=3000;
const bodyparser = require('body-parser');


///.......header er moddome res received kora.....///////////

// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyparser.json());

app.get('/', (req, res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.get('/circle', (req, res)=>{
    res.sendFile(__dirname+"/circle.html")
})

app.get('/trangle', (req, res)=>{
    res.sendFile(__dirname+"/trangle.html")
})

app.post('/circle', (req, res)=>{
    
    const radius=req.body.radius;
    const area=Math.PI *radius*radius;

    res.send(`circle area is ${area}`);
})

app.post('/trangle', (req, res)=>{
    const base=req.body.base;
    const height=req.body.height;
    const area=0.5*base*height;

    res.send(`trangle area is ${area}`);
})


app.listen(PORT, ()=>{
    console.log("server is runnig ");
})