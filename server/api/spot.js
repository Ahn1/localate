import spot from '../Features/spot.js'


async function AddSpot(ctx, res) {
    let newSpot = {
      name: ctx.request.body.name,
      lat: parseFloat(ctx.request.body.lat),
      long: parseFloat(ctx.request.body.long)
    }

    ctx.body = await spot.AddSpot(ctx.request.body.map,newSpot)
}

export default function(router, app) {
    router.post("/spot/AddSpot", AddSpot);
}
