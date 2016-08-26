import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'

import App from './views/App'
import Login from './views/Login'

import Masterpage from './views/Masterpage'

import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Masterpage}>
        <Route path="/" component={App} />
        <Route path="/login" component={Login} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('reactRoot')
)

export default store;
