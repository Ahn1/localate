import {
    ObjectId,
    MongoClient
} from 'mongodb'

function GetReadAllFunction(cursor) {
    return () => {
        return new Promise((res, rej) => {
            let docs = [];
            cursor.each((err, doc) => {
                if (err) {
                    console.log("ERROR! IN READ ALL!");
                    rej(err);
                }
                if (doc) {
                    docs.push(doc);
                } else {
                    res(docs);
                }
            });

        });
    }
}

class Mongo {

    connect(url) {
        return new Promise((res, rej) => {
            MongoClient.connect(url, (err, db) => {
                if (err) {
                    rej(err);
                } else {
                    res(db);
                }
            });
        });
    }

    ensureIndex(db, collection, index, options) {
        return new Promise((res, rej) => {
            db.collection(collection).ensureIndex(index, options, (err, index) => {
                if (err) {
                    rej(err);
                } else {
                    res(index);
                }
            });
        });
    }

    insert(db, collection, doc) {
        return new Promise((res, rej) => {
            db.collection(collection).insert(doc, (err, result) => {
                if (err) {
                    rej(err);
                } else {
                    res(result);
                }
            });
        });
    }


    findOne(db, collection, query) {
        return new Promise((res, rej) => {
            db.collection(collection).findOne(query, (err, doc) => {
                if (err) {
                    rej(err);
                } else {
                    res(doc);
                }
            });
        });
    }

    findOneById(db, collection, id) {
        return this.findOne(db,collection, {"_id": new ObjectId(id)});
    }

    find(db, collection, query) {
        return new Promise((res, rej) => {
            db.collection(collection).find(query, (err, doc) => {
                if (err) {
                    rej(err);
                } else {
                    doc.readAll = GetReadAllFunction(doc);
                    res(doc);
                }
            });
        });
    }

}

export default new Mongo();
