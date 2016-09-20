import StoreBase from './StoreBase.js'

var AppDispatcher = require('./Dispatcher.js');
import EventEmitter from 'events';

import ApplicationStore from './ApplicationStore.js'

export default new class PositionStore extends StoreBase {

    constructor() {
        super();
        this.loaded = false;
        this.hasPosition = false;
        this.Load();
    }

    Load() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
              this.emit("Loaded")
              this.loaded = true;
              this.hasPosition = true;
              this.lat = pos.coords.latitude;
              this.long =  pos.coords.longitude;
            });
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
            this.emit("Loaded")
        }
    }

}()
