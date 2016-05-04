import map from '../Features/map.js'


async function GetMap(ctx, res) {
    ctx.body = await map.GetMap(ctx.request.query.map)
}


export default function(router, app) {
    router.get("/map/getMap", GetMap);
}
