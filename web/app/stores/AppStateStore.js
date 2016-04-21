import StoreBase from './StoreBase.js'

var AppDispatcher = require('./Dispatcher.js');
import EventEmitter from 'events';

import MapAccessStore from './MapAccessStore.js'
import LoginStore from './LoginStore.js'


export default new class AppStateStore extends StoreBase {

    constructor() {
        super();
        MapAccessStore.on("ChangeMapAccess", (o) => this.ChangeMapAccess(o));

        this.map = null;
        this.access = null;
    }

    EmitChange() {
        this.emit("ChangeState", {
            map: this.map,
            access: this.access,
            loggedIn: this.loggedIn
        });
    }

    async ChangeMapAccess(options) {
        this.access = options;
        this.map = options.map;
        this.loggedIn = LoginStore.isLoggedIn;

        this.EmitChange();
    }




}()
