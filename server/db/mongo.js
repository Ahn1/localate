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

  ensureIndex(db, collection, index, options){
    return new Promise((res,rej) => {
      db.collection(collection).ensureIndex(index,options, (err,index) => {
        if(err){
          rej(err);
        }
        else{
          res(index);
        }
      });
    });
  }

  insert(db,collection, doc){
    return new Promise((res,rej) => {
      db.collection(collection).insert(doc, (err,result) => {
        if(err){
          rej(err);
        }
        else{
          res(result);
        }
      });
    });
  }


  findOne(db,collection, query){
    return new Promise((res,rej) => {
      db.collection(collection).findOne(query, (err,doc) => {
        if(err){
          rej(err);
        }
        else{
          res(doc);
        }
      });
    });
  }

  find(db,collection, query){
    return new Promise((res,rej) => {
      db.collection(collection).find(query, (err,doc) => {
        if(err){
          rej(err);
        }
        else{
          res(doc);
        }
      });
    });
  }

}

export default new Mongo();
