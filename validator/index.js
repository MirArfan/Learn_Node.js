const express = require("express");
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

/// create product schema
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})


/// create Model
const Product = mongoose.model("Products", productSchema)


const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test')
        console.log("db is connected");
    } catch (error) {
        console.log("not connected");
        console.log(err);
        process.exit(1);
    }
}

// mongoose.connect('mongodb://127.0.0.1:27017/test')
//     .then(() => console.log("connected"))
//     .catch((err) => {
//         console.log("not connected");
//         console.log(err);
//         process.exit(1);
//     })

app.get("/products", async (req, res) => {
    try {
        // const title = req.body.title;
        // const price = req.body.price;
        // const description = req.body.description;

        // const newProduct=new Product({
        //     title: title,
        //     price: price,
        //     description: description
        // })

        // const productData =await newProduct.save();

        // jodi many data send korte cai tkn, direct
        // schema create na kore emne  model er throw te send korbo

        // const productData= await Product.insertMany([
        //     {
        //         title: " redmi node 7",
        //         price: 14000,
        //         description: "China Apple version"
        //     },
        //     {
        //         title: " redmi node 9",
        //         price: 13000,
        //         description: "China version"
        //     },
        // ])
        const price=req.body.price;
        const title=req.body.title;
        const queryData= {
            $or:[{price: {$gt:6}}, {title: {$eq: title}}]
        }
        // sort({price:-1})
        // count()
        // 
        const productData = await Product.find(queryData).sort({price:-1}).select({title:1, price:1, _id:0})
        if (productData) {
            res.status(200).send({
                success: true,
                message: "return All Products",
                data: productData
            })
            // res.status(200).send(productData);
        }
        // ll?
        else {
            res.status(400).send({
                success: false,
                message: "products not found",
            })
        }

        // res.status(201).send(productData)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})
app.listen(PORT, async () => {
    console.log("running");
    await connectDB();

})