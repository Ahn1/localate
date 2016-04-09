import info from "./info.js"
import auth from "./auth.js"

export default function(router, app) {
    info(router, app);
    auth(router, app);
}
