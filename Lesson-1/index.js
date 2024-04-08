const koa =require('koa');
const app=new koa();


app.use((ctx, next)=>{
    ctx.body="hello koa";
})


app.listen(3001, ()=>{
    console.log("server is running");
})