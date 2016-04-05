import { EventEmitter } from 'events';
var AppDispatcher = require('./Dispatcher.js');

export default class StoreBase extends EventEmitter {

  constructor() {
    super();
  }

  Register(method,action){
    AppDispatcher.register((payload) => {
      if(payload.type == method)
        action();
    });
  }


}
