import {uid} from 'rand-token'

import mongo from '../db/mongo.js'

import config from "../../../config.js"

import users from "./users.js"

export default new class{
  async Login(username, password){
    var user = await users.GetUser(username);

    console.log(user)

    if(!user)
      return false;

      console.log("try insert auth")

    let db = await mongo.connect(config.server.db);

    let token = uid(50);
    await mongo.insert(db,"auth", {"username": username, token});

    return token;
  }
}
