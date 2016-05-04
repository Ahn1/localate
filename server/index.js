require("babel-polyfill");

import Koa from 'koa'
import KoaStatic from 'koa-static'
import convert from 'koa-convert'
import logger from 'koa-logger'
import gzip from 'koa-gzip';

import config from "../../config.js"
import dbSetup from "./db/setup.js";
import auth from "./Features/auth.js";
import user from "./Features/users.js";
import api from "./api/api.js"

var router = require('koa-router')();
var bodyParser = require('koa-bodyparser');

import winston from 'winston';

winston.level = 'debug';
winston.info(`Start localate in ${__dirname}`)

const app = new Koa();
app.use(convert(logger()))
app.use(convert(gzip()));
app.use(convert(bodyParser()));
app.use(convert(KoaStatic(__dirname + "/../web/", {})));
app.use(convert(KoaStatic(__dirname + "/../style/", {})));
app.use(convert(KoaStatic(__dirname + "/../../static/webroot", {})));

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.log(err);
    ctx.body = { message: err.message };
    ctx.status = err.status || 500;
  }
});

api(router,app);
app.use(router.routes());

async function Run() {
    var dbSetupExecutor = new dbSetup();
    await dbSetupExecutor.Execute();

    console.log(`Listen on Port ${config.server.listenPort}`)
    app.listen(config.server.listenPort);
};

Run();


/*
// uses async arrow functions

app.use(async ctx => {
  let user = await Promise.resolve("Hello")
  throw new Exception();
  ctx.body = user; // ctx instead of this
});
*/
