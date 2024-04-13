const express = require("express");
const app = express();
const PORT = 3000;

// // Body parsing middleware should be applied before defining routes that handle POST requests
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
const bodyParser = require('body-parser');
const { body, validationResult } = require("express-validator");
const userRoutes = require("./routes/user");



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/api",userRoutes);

app.get("/test", (req, res) => {
    res.send("hello");
});



app.listen(PORT, () => {
    console.log("server is running");
});
