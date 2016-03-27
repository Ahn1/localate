require("babel-polyfill");

import Koa from 'Koa'

// Koa application is now a class and requires the new operator.
const app = new Koa();

// uses async arrow functions
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.log(err);
    ctx.body = { message: err.message };
    ctx.status = err.status || 500;
  }
});

app.use(async ctx => {
  let user = await Promise.resolve("Hello")
  throw new Exception();
  ctx.body = user; // ctx instead of this
});


app.listen(3000);
