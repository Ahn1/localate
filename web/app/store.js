import appReducers from './reducers'

import { createStore,applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk';

export default createStore(appReducers,
  compose(applyMiddleware(thunk),
  (typeof window !== 'undefined' && window.devToolsExtension) ? window.devToolsExtension() : f => f
  ))
