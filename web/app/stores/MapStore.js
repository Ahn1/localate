import StoreBase from './StoreBase.js'

var AppDispatcher = require('./Dispatcher.js');
import EventEmitter from 'events';

import ApplicationStore from './ApplicationStore.js'

export default new class MapStore extends StoreBase {

  constructor() {
    super();
    ApplicationStore.on("InitApp", (o) => this.InitApp(o));
  }

  InitApp(options){
    this.map = {name: options.name};

    this.emit("ChangeMap", {name: this.map})
  }

}()
