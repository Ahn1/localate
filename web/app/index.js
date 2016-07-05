import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import appReducers from './reducers'
import App from './Views/App'


let store = createStore(appReducers,applyMiddleware(thunk))


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('reactRoot')
)
