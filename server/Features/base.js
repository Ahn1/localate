import db from '../Infrastructure/db/default.js'
import config from "../../../config.js"

export default class Featurebase {
  async connect(){
    if(!this.db)
      this.db = await db.mongo.connect(config.server.db);
  }
}
