import StoreBase from './StoreBase.js'

var AppDispatcher = require('./Dispatcher.js');
import EventEmitter from 'events';

import MapStore from './MapStore.js'
import LoginStore from './LoginStore.js'

export default new class MapAccessStore extends StoreBase {

    constructor() {
        super();
        MapStore.on("ChangeMap", (o) => this.RefreshAuth(o));
        LoginStore.on("LoginChanged", (o) => this.RefreshLogin(o))

        // Listen on change user

        this.changing = false;
    }

    async RefreshLogin(options) {
        this.emit("ChangingMapAccess", {})
        this.access = {
            write: LoginStore.isLoggedIn,
            read: LoginStore.isLoggedIn,
            map: this.map
        };
        this.emit("ChangeMapAccess", this.access);
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
            write: LoginStore.isLoggedIn,
            read: LoginStore.isLoggedIn,
            map: this.map
        };

        this.emit("ChangeMapAccess", this.access);

        this.changing = false;
    }

}()
