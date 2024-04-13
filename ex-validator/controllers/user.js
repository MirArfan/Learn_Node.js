const userRegister = (req, res) => {
    try {
        const { name, email, password, dob } = req.body;
        const newUser = {
            name,
            email,
            password,
            dob
        };
        return res.status(201).json({
            message: "user was created",
            newUser,
        });
    } catch (error) {
        return res.json({
            message: error.message,
        });
    }
}

module.exports=userRegister;