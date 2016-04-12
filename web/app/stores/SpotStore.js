import StoreBase from './StoreBase.js'

var AppDispatcher = require('./Dispatcher.js');
import EventEmitter from 'events';

import ApplicationStateStore from './AppStateStore.js'

export default new class SpotStore extends StoreBase {

    constructor() {
        super();
        this.Register("ADD_SPOT", (e) => {
            this.OnAddSpot(e)
        });
    }

    async OnAddSpot(options) {
        let spot = options.options;
        spot.map = ApplicationStateStore.map;

        var res = await fetch('/spot/AddSpot', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(spot)
        });

        console.log(res);
    }

}()
