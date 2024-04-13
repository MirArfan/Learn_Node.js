const { check } = require("express-validator");

exports.userRigisterValidator=[
    check("name").trim().notEmpty().withMessage("name is missing")
    .isLength({ min: 5 })
    .withMessage("name must have at least 5 char")
    ,
    check("email").trim().notEmpty().withMessage("email is missing")
        .isEmail()
        .withMessage("not a mail")
    ,
    check("password").trim().notEmpty().withMessage("password is missing")
        .isLength({ min: 8 })
        .withMessage("password must have at least 8 char")
    ,
    check("dob").trim().notEmpty().withMessage("dob is missing")
        .isISO8601()
        .toDate()
        .withMessage("not a dob")
]