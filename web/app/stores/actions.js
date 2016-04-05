import dispatcher from './Dispatcher.js';

export default class Actions {
    static init(options) {
        dispatcher.dispatch({type:'INIT',  options });
    }
}
