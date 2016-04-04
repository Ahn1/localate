import {ObjectId, MongoClient} from 'mongodb'

import mongo from './mongo'

const url = "mongodb://testmongo.flarandr.de:27017/localate"

class DbSetup {

  async Execute(){
    var db = await mongo.connect(url);
    await mongo.ensureIndex(db,"users",{"name":1});
  }

}


export default DbSetup;
