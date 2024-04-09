
const express=require('express');
const router=express.Router();

router.get('/about', (req, res)=>{
    res.send("About router");
})
router.get('/login', (req, res)=>{
    res.send("login router");
})
router.get('/register', (req, res)=>{
    res.send("register router");
})
router.post('/', (req, res)=>{
    res.send("post router");
})
router.put('/', (req, res)=>{
    res.send("put router");
})
router.delete('/', (req, res)=>{
    res.send("delete router");
})

module.exports=router;