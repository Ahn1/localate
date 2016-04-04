import {ObjectId, MongoClient} from 'mongodb'

import mongo from './mongo'

const url = "mongodb://testmongo.flarandr.de:27017/localate"

class DbSetup {

  async Connect(){
    this.db = await mongo.connect(url);
  }

  async SetupIndex(){

    await mongo.ensureIndex(this.db,"users",{"name":1});

  }

}

export default DbSetup;
