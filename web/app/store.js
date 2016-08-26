import appReducers from './reducers'

import { createStore,applyMiddleware,compose,combineReducers } from 'redux'
import thunk from 'redux-thunk';

import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

export default createStore(combineReducers({app:appReducers, routing: routerReducer}),
  compose(applyMiddleware(thunk),
  (typeof window !== 'undefined' && window.devToolsExtension) ? window.devToolsExtension() : f => f
  ))
