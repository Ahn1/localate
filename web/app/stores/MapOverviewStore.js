import StoreBase from './StoreBase.js'
import AppStateStore from './AppStateStore.js'

export default new class MapOverviewStore extends StoreBase {

    constructor() {
        super();
        this.Register("LOADOVERVIEWSPOTS", (e) => {
            this.LoadSpots(e.options)
        });
    }

    async LoadSpots(options) {
        console.log("START LAOD")
        console.log(AppStateStore)

        var loadRequest = await fetch(`/spot/SearchSpots?map=${AppStateStore.map}&boundingBox=${JSON.stringify(options.box)}`);
        var spots = await loadRequest.json();

        console.log(spots);

        this.spots = spots;

        this.emit("GotSpots", spots)
    }

}()
