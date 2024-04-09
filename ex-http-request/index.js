const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    //    res.send("hello");
    const id=req.query.id;
    const name=req.query.name;
    res.send(`student id is ${id} and name is ${name}`);
    // res.send(`student name is ${name}`);

})
app.listen(PORT, () => {
    console.log("3000 e running")
})