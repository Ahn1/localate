import {ObjectId, MongoClient} from 'mongodb'

class Mongo{

  connect(url){
    return new Promise((res,rej) => {
      MongoClient.connect(url,(err,db) => {
        if(err){
          rej(err);
        }
        else{
          res(db);
        }
      });
    });
  }

  ensureIndex(db, collection, index){
    return new Promise((res,rej) => {
      db.collection(collection).ensureIndex(index, (err,index) => {
        if(err){
          rej(err);
        }
        else{
          res(db);
        }
      });
    });
  }

}

export default new Mongo();
