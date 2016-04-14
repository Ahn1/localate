import { EventEmitter } from 'events';
import AppDispatcher from './Dispatcher.js';

export default class StoreBase extends EventEmitter {

  constructor() {
    super();
  }

  Register(method,action){
    AppDispatcher.register((payload) => {
      if(payload.type == method)
        action(payload);
    });
  }

  async RaiseAndWait(method, eventType)
  {
    let awaiter = this.WaitForEvent(eventType);
    method();
    await awaiter;
  }

  async WaitForEvent(eventType){
    return new Promise((res,rej) => {
      console.log("CREATE PROMISE")
      let callback = (e) => {
        this.removeListener(eventType, callback);
        res(e);
      }
      this.on(eventType,callback);
    });
  }


}
