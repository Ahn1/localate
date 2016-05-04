import StoreBase from './StoreBase.js'

var AppDispatcher = require('./Dispatcher.js');
import EventEmitter from 'events';

import ApplicationStore from './ApplicationStore.js'

export default new class MapStore extends StoreBase {

  constructor() {
    super();
    ApplicationStore.on("InitApp", (o) => this.InitApp(o));
  }

  async InitApp(options){
    this.map = options.name;

    var mapRequest = await fetch(`/map/getMap?map=${this.map}`);
    var mapInfo = await mapRequest.json();

    this.mapInfo = mapInfo;

    this.emit("ChangeMap", {name: this.map})
  }

}()
