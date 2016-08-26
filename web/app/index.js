import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import App from './Views/App'
import App from './views/App'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('reactRoot')
)

export default store;
