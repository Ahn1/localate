import ReactDOM from 'react-dom'

import Mainview from './controls/Mainview'

import actions from './stores/actions.js'
import Dispatcher from './stores/Dispatcher.js'

ReactDOM.render(<Mainview />, document.getElementById('reactRoot'));

actions.init();

/*
var sub = tldjs.getSubdomain(window.location.href);

alert(sub);
*/
