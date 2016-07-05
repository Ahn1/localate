import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk';

import appReducers from './reducers'
import App from './Views/App'


let store = createStore(appReducers,
  compose(applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f))


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('reactRoot')
)
