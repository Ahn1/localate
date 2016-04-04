import mongo from '../db/mongo.js'

import config from "../../../config.js"

import Featurebase from "./base.js"

export default new class extends Featurebase{

  async GetUser(username, ignoreActive){
    await this.connect();

    let user = await mongo.findOne(this.db,"users",{"name": username});

    if(!user)
      return false;

    if(user.deleted)
      return false;

    if(!user.active && !ignoreActive)
      return false;

    return user;
  }
}
