const app=require("./app")



const PORT=process.env.PORT || 3001;
// console.log(PORT);

app.listen(PORT, ()=>{
    console.log("running")
})
