require("babel-polyfill");

import Koa from 'Koa'
import KoaStatic from 'koa-static'
import convert from 'koa-convert'
import logger from 'koa-logger'

import gzip from  'koa-gzip';

// Koa application is now a class and requires the new operator.
const app = new Koa();

console.log(__dirname)


app.use(convert(logger()))
app.use(convert(gzip()));
app.use(convert(KoaStatic(__dirname + "/../web/", {})));
app.use(convert(KoaStatic(__dirname + "/../style/", {})));
app.use(convert(KoaStatic(__dirname + "/../../static/webroot", {})));


/*
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
*/

app.listen(3000);
