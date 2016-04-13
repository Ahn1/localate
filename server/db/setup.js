import {ObjectId, MongoClient} from 'mongodb'

import mongo from './mongo'

import config from "../../../config.js"

class DbSetup {

  async Execute(){
    var db = await mongo.connect(config.server.db);

    //Users
    await mongo.ensureIndex(db,"users",{"name":1});

    //Auth
    await mongo.ensureIndex(db,"auth",{"username":1});
    await mongo.ensureIndex(db,"auth",{"token":1});
    await mongo.ensureIndex(db,"auth",{ "expireAt": 1 },{ expireAfterSeconds: 0 });


    await mongo.ensureIndex(db,"map",{ "name": 1 },{unique: true});
    await mongo.ensureIndex(db,"map",{ "path": 1 },{unique: true});
    await mongo.ensureIndex(db,"map",{ "owner": 1 });

    await mongo.ensureIndex(db,"spots",{ "map": 1 });
    await mongo.ensureIndex(db,"spots",{ "location": "2dsphere" });
    await mongo.ensureIndex(db,"spots",{ "map": 1, name: 1 },{unique: true});
  }

}


export default DbSetup;
