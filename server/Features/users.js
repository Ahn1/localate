import mongo from '../db/mongo.js'

import config from "../../../config.js"

export default new class{

  async GetUser(username){
    let db = await mongo.connect(config.server.db);
    return mongo.findOne(db,"users",{"name": username});
  }
}
