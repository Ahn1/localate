import StoreBase from './StoreBase.js'

var AppDispatcher = require('./Dispatcher.js');
import EventEmitter from 'events';

export default new class ApplicationStore extends StoreBase {

  constructor() {
    super();
    this.Register("INIT",() => {this.OnInitApp()});
  }



  OnInitApp(){
    let subdomain = tldjs.getSubdomain(window.location.href );
    subdomain = subdomain || "Testmap";

    this.emit("InitApp", {name: subdomain})
  }


}()
