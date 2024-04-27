const joi = require("joi");
const { shemas } = require("./schemas");

exports.runValidation= (schema)=>{
   return (req, res, next)=>{
        // validate using joi
       
        // validate  using schema
        const {error}=schema.validate(req.body, {abortEarly: false,
        errors:{
            wrap:{
                label: "",
            }
        }
        });
        if(error){
            const errorList=error.details.map((err)=>err.message)
            return  res.status(404).json({
                message: "invalid data/input",
                error: errorList,
            })
        }
        next();
    
    }
}