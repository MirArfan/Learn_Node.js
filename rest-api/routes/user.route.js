const createUsers = require("../controllers/users.controller");
const deleteUsers = require("../controllers/users.controller");
const updateUsers = require("../controllers/users.controller");
const getAllusers = require("../controllers/users.controller");

const express=require("express");
const router=express.Router();


router.get("/", getAllusers)
router.post("/", createUsers);
router.put("/:id", updateUsers);
router.delete("/:id", deleteUsers)


module.exports=router;