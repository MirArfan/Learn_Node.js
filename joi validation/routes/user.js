const express=require("express");
const joi = require("joi");
const registerUser = require("../controllers/user");
const loginUser = require("../controllers/user");
const { runValidation } = require("../validation");
const { shemas } = require("../validation/schemas");
const userRouter=express.Router();

// for registation route
userRouter.post("/register",runValidation(shemas.registaionSchema), registerUser)

// for login route
userRouter.post("/login",runValidation(shemas.loginSchema), loginUser)


module.exports=userRouter;