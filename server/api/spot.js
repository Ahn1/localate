import spot from '../Features/spot.js'


async function AddSpot(ctx, res) {
    let newSpot = {
      name: ctx.request.body.name,
      lat: parseFloat(ctx.request.body.lat),
      long: parseFloat(ctx.request.body.long)
    }

    ctx.body = await spot.AddSpot(ctx.request.body.map,newSpot)
}

async function SearchSpots(ctx, res){
  ctx.body = await spot.GetSpots(ctx.request.query.map, JSON.parse(ctx.request.query.boundingBox));
}

export default function(router, app) {
    router.post("/spot/AddSpot", AddSpot);
    router.get("/spot/SearchSpots", SearchSpots);
}
