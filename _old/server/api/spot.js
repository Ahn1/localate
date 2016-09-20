import spotFeature from '../Features/spot.js'

import winston from 'winston';

async function AddSpot(ctx, res) {
    let newSpot = {
        name: ctx.request.body.name,
        lat: parseFloat(ctx.request.body.lat),
        long: parseFloat(ctx.request.body.long)
    }

    ctx.body = await spotFeature.AddSpot(ctx.request.body.map, newSpot)
}

async function SearchSpots(ctx, res) {
    ctx.body = await spotFeature.GetSpots(ctx.request.query.map, JSON.parse(ctx.request.query.boundingBox));
}

async function Spot(ctx, res) {
    var spot = await spotFeature.GetSpotDetails(ctx.params.spotId);

    if (spot)
        ctx.body = spot;
    else
        ctx.response.status = 404;
}

export default function(router, app) {
    router.post("/spot/AddSpot", AddSpot);
    router.get("/spot/SearchSpots", SearchSpots);
    router.get("/spot/:spotId", Spot);
}
