import StoreBase from './StoreBase.js'

var AppDispatcher = require('./Dispatcher.js');
import EventEmitter from 'events';

import MapAccessStore from './ChangeMapAccess.js'

export default new class AppStateStore extends StoreBase {

    constructor() {
        super();
        MapAccessStore.on("ChangeMapAccess", () => ChangeMapAccess());

        this.map = null;
        this.access = null;
    }

    async ChangeMapAccess(options) {
      this.emit("ChangeState",{});
    }

}()
