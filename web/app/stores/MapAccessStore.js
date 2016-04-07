import StoreBase from './StoreBase.js'

var AppDispatcher = require('./Dispatcher.js');
import EventEmitter from 'events';

import MapStore from './MapStore.js'

export default new class MapAccessStore extends StoreBase {

    constructor() {
        super();
        MapStore.on("ChangeMap", (o) => this.RefreshAuth(o));
        // Listen on change user

        this.changing = false;
    }

    async RefreshAuth(options) {

        if (this.changing)
            return;

        this.changing = true;
        this.emit("ChangingMapAccess", {})

        this.map = options.name;

        // get current user

        // Todo: Get Access by current user
        this.access = {
            write: true,
            read: true,
            map: this.map
        };

        this.emit("ChangeMapAccess", this.access);

        this.changing = false;
    }

}()
