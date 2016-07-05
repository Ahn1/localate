import StoreBase from './StoreBase.js'

var AppDispatcher = require('./Dispatcher.js');
import EventEmitter from 'events';

import ApplicationStateStore from './AppStateStore.js'

export default new class SpotStore extends StoreBase {

    constructor() {
        super();
        this.Register("CHANGE_SPOT", (e) => {
            this.OnChangeSpot(e)
        });
    }

    OnChangeSpot({options}){



    }

}()
