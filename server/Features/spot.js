
import mongo from '../db/mongo.js'

import config from "../../../config.js"

import users from "./users.js"
import Featurebase from "./base.js"

require('datejs')

export default new class Spot extends Featurebase {

  async AddSpot(username, password){
    await this.connect();

    //Todo

  }
}
