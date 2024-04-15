const express = require("express");
const app = express();
const userRouter=require("./routes/userRoute");
const productRouter=require("./routes/productRoute");



const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use(productRouter)




app.use((req, res, next) => {
    res.send("resourse not found");
})

app.listen(PORT, () => {
    console.log("server is running"
    )
})