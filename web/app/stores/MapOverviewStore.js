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
        await AppStateStore.EnsureInitialized()

        console.log("START LAOD")
        console.log(AppStateStore)
        console.log(AppStateStore.map)

        var loadRequest = await fetch(`/spot/SearchSpots?map=${AppStateStore.map}&boundingBox=${JSON.stringify(options.box)}`);
        var spots = await loadRequest.json();

        this.spots = spots;

        this.emit("GotSpots", spots)
    }

}()
