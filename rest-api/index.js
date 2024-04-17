const app=require("./app");
require("dotenv").config();

const PORTT=process.env.PORT|| 4000;

app.listen(PORTT, ()=>{
   console.log("server is runnig");
})