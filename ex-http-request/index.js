const express = require("express");
const app = express();
const PORT = 3000;


///.......header er moddome res received kora.....///////////

app.get("/", (req, res) => {
    const id=req.header('id');
    const name=req.header('name');
    res.send(`student id is ${id} and name is ${name}`);
   


})

///.......http request with ...route.... parameter.....///////////


// app.get("/userId/:id/useAge/:age", (req, res) => {
//     //    res.send("hello");
//     const id=req.params.id;
//     const age=req.params.age;
//     res.send(`student id is ${id} and name is ${age}`);
//     // res.send(`student name is ${name}`);


// })

///.......http request with ......query.... parameter.....///////////

// app.get("/", (req, res) => {
//     //    res.send("hello");
//     const id=req.query.id;
//     const name=req.query.name;
//     res.send(`student id is ${id} and name is ${name}`);
//     // res.send(`student name is ${name}`);

// })

app.listen(PORT, () => {
    console.log("3000 e running")
})