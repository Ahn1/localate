import mongo from '../db/mongo.js'

import config from "../../../config.js"

import users from "./users.js"
import Featurebase from "./base.js"

require('datejs')

export default new class Spot extends Featurebase {

    async AddSpot(map, options) {
        await this.connect();


        var res = await mongo.insert(this.db, "spots", {
            "name": options.name,
            location: {
                type: "Point",
                coordinates: [options.lat, options.long]
            },
            desc: options.desc,
            map
        });


        return res;

    }
}
