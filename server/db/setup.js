import {ObjectId, MongoClient} from 'mongodb'

import mongo from './mongo'

import config from "../../../config.js"

class DbSetup {

  async Execute(){
    var db = await mongo.connect(config.server.db);

    //Users
    await mongo.ensureIndex(db,"users",{"name":1});

    //Auth
    await mongo.ensureIndex(db,"auth",{"username":1, "token":1});
  }

}


export default DbSetup;
