const joi = require("joi");

const registerUser= (req,res)=>{
    
    try {
        const user={
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        }
        res.status(201).json({
            message: "user is added successfully ",
            result,
        })
    } catch (error) {
        res.status(404).send({error: error.message})
    }
}

const loginUser=(req,res)=>{

    try {
        
        res.status(201).json({
            message: "user logged in  ",
           
        })
    } catch (error) {
        res.status(404).send({error: error.message})
    }
}
module.exports=registerUser;
module.exports=loginUser;