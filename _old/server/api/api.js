import info from "./info.js"
import auth from "./auth.js"
import spot from "./spot.js"
import map from "./map.js"

export default function(router, app) {
    info(router, app);
    auth(router, app);
    spot(router, app);
    map(router, app);
}
