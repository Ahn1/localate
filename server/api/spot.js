import spot from '../Features/spot.js'


async function AddSpot(ctx, res) {
    console.log(ctx.request.body);

    let newSpot = {
      name: ctx.request.body.name,
      desc: ctx.request.body.desc,
      lat: parseFloat(ctx.request.body.lat),
      long: parseFloat(ctx.request.body.long)
    }

    ctx.body = await spot.AddSpot(ctx.request.body.map,newSpot)
}

export default function(router, app) {
    router.post("/spot/AddSpot", AddSpot);
}
