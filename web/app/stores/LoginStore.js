import StoreBase from './StoreBase.js'

var AppDispatcher = require('./Dispatcher.js');
import EventEmitter from 'events';
import cookies from 'cookies-js'

import ApplicationStore from './ApplicationStore.js'

export default new class LoginStore extends StoreBase {

  constructor() {
    super();
    this.Register("LOGIN",(e) => {this.OnLogin(e)});

    this.isLoggedIn = false;
  }

  async OnLogin({options}){
    var authRequest = await fetch(`/auth/login?username=${options.name}&password=${options.password}`);
    var auth = await authRequest.json();

    if(auth.success)
    {
      cookies.set('token', auth.token);
      this.isLoggedIn = true;
      this.emit("LoginChanged")
    }
    else
    {
        alert("NO")
    }



  }

}()
