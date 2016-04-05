import {Component, PropTypes} from 'react';

import App from './App'
import Home from './Home'
import {Router, Route, Link, browserHistory} from 'react-router'

export default class Menu extends Component {

    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                  <Route path="home" component={Home}/>
                </Route>
            </Router>
        );
    }
}
