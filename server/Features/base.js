import mongo from '../db/mongo.js'
import config from "../../../config.js"

export default class Featurebase {
  async connect(){
    if(!this.db)
      this.db = await mongo.connect(config.server.db);
  }
}
