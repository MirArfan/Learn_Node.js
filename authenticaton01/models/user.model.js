const mongoose=require("mongoose");
constuserShema=mongoose.Schema({
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require:true
    },
    password:{
        type: Date,
        default:Date.now
    },
})


module.exports=mongoose.model("users", userSchema)