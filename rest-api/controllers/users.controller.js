
let users = require("../models/user.model");
const { v4: uuidv4 } = require("uuid");

const getAllusers = (req, res) => {
    res.status(200).json({ users });
}
// create users
// const createUsers = (req, res) => {
//     const newUser = {
//         id: uuidv4(),
//         username: req.body.username,
//         email: req.body.email,
//     }
//     users.push(newUser);
//     res.status(201).json(users);
//     // res.status(201).json({message: "jjd"});
// }

//update users
const updateUsers = (req, res) => {
    const userId = req.params.id;
    const { username, email } = req.body;
    users.filter((user) => user.id === userId).map((selecteduser) => {
        selecteduser.username = username,
            selecteduser.email = email
    })
    res.status(200).json(users);
}

// //delete users
// const deleteUsers = (req, res) => {
    
//     const userId = req.params.id;
//     users = users.filter((user) => user.id !== userId)
//     res.status(200).json(users);
// }

module.exports = getAllusers;
// module.exports = createUsers;
module.exports = updateUsers;
// module.exports = deleteUsers;