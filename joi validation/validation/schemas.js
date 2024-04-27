const joi = require("joi");

exports.shemas={
    registaionSchema: joi.object({
        name: joi.string().min(3).max(12).required(),
        email: joi.string().email().required(),
        password: joi.string().min(6).max(8).required(),
    }),
    loginSchema: joi.object({

        email: joi.string().email().required(),
        password: joi.string().min(6).max(8).required(),
    })
}