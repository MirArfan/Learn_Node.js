// const Koa = require("koa");
// const app = new Koa();

// app.use(async (ctx, next) => {
//     const start = Date.now();
//     await next(); 
//     const ms = Date.now() - start;
//     console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
// });
// app.use((ctx) => {
//     ctx.body = "Hello Koa 2";
// });

// app.listen(3002, () => {
//     console.log("Server is running on port 3002");
// });


const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = new Koa();

app.use(bodyParser());

app.use((ctx) => {
    // the parsed body will store in ctx.request.body
    // if nothing was parsed, body will be an empty object {}
    ctx.body = ctx.request.body;
  });

// app.use(async (ctx, next) => {
//     const start = Date.now();
//     await next();
//     const ms = Date.now() - start;
//     console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
// });

// app.use((ctx)=>{
//     ctx.status=200;
//     console.log(ctx.req, ctx.request.body, ctx.req.body);
//     ctx.body="hello vai";
// })


// app.listen(3003, () => {
//     console.log("server is running 3002 post");
// })