import dispatcher from './Dispatcher.js';

export default class Actions {
    static init(options) {
        dispatcher.dispatch({type:'INIT',  options });
    }
    static MapLoadComplete(options){
      dispatcher.dispatch({type:'MAP_LOADED',  options });
    }
}
