const express=require("express");
const app=express();
const multer  = require('multer')

const port=3000;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const name = Date.now() + '-' + file.originalname;
      cb(null, name)
    }
  })
  
  const upload = multer({ storage: storage })

app.get("/addfile", (req, res)=>{
    res.status(200).sendFile(__dirname+ "/index.html");
 })

 app.post("/addfile",upload.single('image'), (req, res)=>{
    res.status(200).send("file is uploaded here");
 })


app.use("/", (req, res)=>{
   res.send("jjj");
})


app.listen(port, ()=>{
    console.log("server is runnig at 3000 port");
})