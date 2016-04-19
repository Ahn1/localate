import dispatcher from './Dispatcher.js';

export default class Actions {
    static init(options) {
        dispatcher.dispatch({
            type: 'INIT',
            options
        });
    }
    static login(options) {
        dispatcher.dispatch({
            type: 'LOGIN',
            options
        });
    }
    static logoff(options) {
        process.nextTick(() => dispatcher.dispatch({
            type: 'LOGOFF',
            options
        }));
    }
    static MapLoadComplete(options) {
        dispatcher.dispatch({
            type: 'MAP_LOADED',
            options
        });
    }
    static AddSpot(options) {
        dispatcher.dispatch({
            type: 'ADD_SPOT',
            options
        });
    }




}
