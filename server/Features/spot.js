import geo from "../Infrastructure/geo.js"

import db from '../Infrastructure/db/db.js'

import config from "../../../config.js"

import users from "./users.js"
import Featurebase from "./base.js"

import winston from 'winston';
require('datejs')

export default new class Spot extends Featurebase {

    async AddSpot(map, options) {
        await this.connect();

        var geoInfo = await geo.ReverseSearch(options.lat, options.long);

        console.log(geoInfo);

        var res = await db.mongo.insert(this.db, "spots", {
            "name": options.name,
            location: {
                type: "Point",
                coordinates: [options.long, options.lat]
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

    async GetSpots(map, boundingBox) {
        await this.connect();

        //boundingBox = [[52.675499, 13.76134],[52.33812, 13.0884]];

        winston.debug(`Get spots for ${map} on ${boundingBox}`)

        var res = await db.mongo.find(this.db, "spots", {
            location: {
                $geoWithin: {
                    $box: [
                        [boundingBox[0][1], boundingBox[0][0]],
                        [boundingBox[1][1], boundingBox[1][0]],
                    ]
                }
            },
            map: map
        });

        let docs = await res.readAll()

        return docs;
    }
}
