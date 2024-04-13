const express = require("express");
const { validationResult, body } = require("express-validator");
const { runValidator } = require("../validator");
const { userRigisterValidator } = require("../validator/auth");
const userRegister = require("../controllers/user");
const userRoutes = express.Router();



userRoutes.post("/register",
    userRigisterValidator,
    runValidator,
    userRegister
);


userRoutes.post("/login",



    body("email").trim().notEmpty().withMessage("email is missing")
        .isEmail()
        .withMessage("not a mail")
    ,
    body("password").trim().notEmpty().withMessage("password is missing")
        .isLength({ min: 8 })
        .withMessage("password must have at least 8 char")
    ,

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            })
        }
        next();
    },

    (req, res) => {
        try {
            const { email, password } = req.body;
            if (email === "rahat@gmail.com" && password === "12345678") {
                return res.status(200).json({
                    message: "user was loggedIN",

                });
            }
            else {
                return res.status(400).json({
                    message: " email or passwors is wrong",

                });
            }


        } catch (error) {
            return res.json({
                message: error.message,
            });
        }
    });

module.exports = userRoutes;