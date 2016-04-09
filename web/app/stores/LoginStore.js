import StoreBase from './StoreBase.js'

var AppDispatcher = require('./Dispatcher.js');
import EventEmitter from 'events';
//import fetch from 'node-fetch'

import ApplicationStore from './ApplicationStore.js'

export default new class LoginStore extends StoreBase {

  constructor() {
    super();
    this.Register("LOGIN",(e) => {this.OnLogin(e)});
  }

  async OnLogin({options}){
    console.log(options);
    var infoREQ = await fetch(`/auth/login?username=${options.name}&password=${options.password}`);
    var info = await infoREQ.json();

    console.log(info);
  }

}()
