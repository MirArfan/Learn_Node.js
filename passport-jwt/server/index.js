const app = require("./app");
const User = require("./models/user.model");
const PORT = 3000;
require("dotenv").config();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const passport=require("passport")
require("./config/passport");

app.use(passport.initialize());

app.post("/register", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })

        if (user) return res.status(400).send("user is already exist")
        bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
            const newUser = new User({
                username: req.body.username,
                password: hash,
            })
            await newUser.save().then((user) => {
                res.send({
                    success: true,
                    message: "user is created successfully",
                    user: {
                        id: user._id,
                        username: user.username,
                    }
                })
            })
                .catch((error) => {
                    res.send({
                        success: false,
                        message: " user is not created",
                        error: error,
                    })
                })
        });
    } catch (error) {
        res.status(500).send(error.message)
    }
})


app.post("/login",async (req, res) => {
    const user = await User.findOne({ username: req.body.username })
    if (!user) {
        return res.status(401).send({
            success: false,
            message: "user is not found",
        })
    }
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordValid) {
        return res.status(401).send({
            success: false,
            message: "incorrect password",
        })
    }

    const payload = {
        id: user._id,
        username: user.username,
    }
    const token = jwt.sign(payload, process.env.SECRECT_KEY, {
        expiresIn: "1h",
    })
    return res.status(200).send({
        success: true,
        message: "user is logged in successsfully",
        token: "bearer " + token,
    })
})

// protected
app.get('/profile', passport.authenticate('jwt', { session: false }),
    function(req, res) {
        res.status(201).send({
            success: true,
            user:{
                id: req.user._id,
                username: req.user.username,
            }
        })
    }
);

// route not found
app.use((req, res, next) => {
    res.status(404).json({ message: " route is not found" });
})

// server error
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})
app.listen(PORT, () => {
    console.log("kkkdmk k");
})