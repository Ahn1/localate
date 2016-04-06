import StoreBase from './StoreBase.js'

var AppDispatcher = require('./Dispatcher.js');
import EventEmitter from 'events';

import ApplicationStore from '../stores/ApplicationStore.js'

export default new class ApplicationStore extends StoreBase {

  constructor() {
    super();
    ApplicationStore.on("InitApp", () => InitMap());
  }

  InitApp(options){
    this.map = {name: options.name};

    this.emit("ChangeMap", {name: this.map})
  }

}()
