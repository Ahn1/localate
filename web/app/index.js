import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import appReducers from './reducers'

import App from './Views/App'

let store = createStore(appReducers)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('reactRoot')
)
