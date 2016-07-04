import geo from "../Infrastructure/geo.js"

import db from '../Infrastructure/db/default.js'

import config from "../../../config.js"

import users from "./users.js"
import Featurebase from "./base.js"

import winston from 'winston'
import GeoJSON from 'geojson'
var bbox = require('geojson-bbox');

require('datejs')

export default new class Map extends Featurebase {

    async GetMap(map) {
        await this.connect();

        winston.debug(`Get map ${map}`)

        winston.debug("Get Spots")
        var res = await db.mongo.find(this.db, "spots", {
            map: map
        });
        let docs = await res.readAll()
        var bbox = geo.GetBoundingBox(docs, (doc) => doc.location.coordinates[1] ,(doc) => doc.location.coordinates[0])
        return {Bounds: bbox};
    }
}
