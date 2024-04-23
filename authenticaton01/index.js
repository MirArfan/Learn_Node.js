const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
require('dotenv').config();
const User = require("./models/user.model")
const encrypt = require('mongoose-encryption');
require("dotenv").config();

const PORT = 3000;


// connection is not woring

const dbURL = process.env.MONGO_URL;
// console.log(dbURL)


// console.log("MongoDB URL:", dbURL);
mongoose.connect(dbURL)
    .then(() => {
        console.log("MongoDB Atlas is connected");
    })
    .catch((err) => {
        console.log(err);
        process.exit(1);
    });





app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/./views/index.html");
})

app.post("/register", async (req, res) => {
    // const { email, password } = req.body;
    try {
        const newUser = new User(req.body)
        await newUser.save();
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json(error)
    }
})
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email })
        if(user && user.password==password){
          res.status(200).json({message: "valid user"})
        }
        else
        {
            res.status(404).json({message: " not a valid user"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
})
app.use((req, res, next) => {
    res.status(404).json({
        message: "route is not found"
    })
})

app.listen(PORT, () => {
    console.log("running");
})