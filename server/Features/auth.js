import {uid} from 'rand-token'

import mongo from '../db/mongo.js'

import config from "../../../config.js"

import users from "./users.js"
import Featurebase from "./base.js"

require('datejs')

export default new class Auth extends Featurebase {

  async Login(username, password){
    await this.connect();

    var user = await users.GetUser(username);

    console.log(user);

    if(!user)
      return false;

    let token = uid(35);
    await mongo.insert(this.db,"auth", {"username": username, token, expireAt: new Date().addMonths(12)});

    console.log(token);

    return token;
  }
}
