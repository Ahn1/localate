import StoreBase from './StoreBase.js'

var AppDispatcher = require('./Dispatcher.js');
import EventEmitter from 'events';

import MapAccessStore from './MapAccessStore.js'

export default new class AppStateStore extends StoreBase {

    constructor() {
        super();
        MapAccessStore.on("ChangeMapAccess",(o) => this.ChangeMapAccess(o));

        this.map = null;
        this.access = null;
    }

    EmitChange(){
      this.emit("ChangeState",{map: this.map.name});
    }

    async ChangeMapAccess(options) {
      this.access = options;
      this.map = options.map;

      console.log("cma")
      this.EmitChange();
    }




}()
