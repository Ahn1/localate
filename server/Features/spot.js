import geo from "../Infrastructure/geo.js"

import mongo from '../db/mongo.js'

import config from "../../../config.js"

import users from "./users.js"
import Featurebase from "./base.js"

require('datejs')

export default new class Spot extends Featurebase {

    async AddSpot(map, options) {
        await this.connect();

        var geoInfo = await geo.ReverseSearch(options.lat,options.long);

        console.log(geoInfo);

        var res = await mongo.insert(this.db, "spots", {
            "name": options.name,
            location: {
                type: "Point",
                coordinates: [options.lat, options.long]
            },
            address: {
              number: geoInfo.house_number || null,
              road: geoInfo.road || null,
              postcode: geoInfo.postcode || null,
              city: geoInfo.city || null,
              state: geoInfo.state || null,
              city_district: geoInfo.city_district || null,
            },
            map
        });


        return res;

    }
}
