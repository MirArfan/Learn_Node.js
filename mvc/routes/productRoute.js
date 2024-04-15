
const express=require("express");
const { saveProducts, getProducts } = require("../controllers/productsController");
const router=express.Router();



router.get("/products", getProducts)

router.post("/products",saveProducts )

module.exports=router;