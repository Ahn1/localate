import {Component, PropTypes} from 'react';

import App from './App'
import Home from './Home'
import {Router, Route, Link, hashHistory} from 'react-router'

export default class Menu extends Component {

    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <Route path="home" component={Home}/>
                    <Route path='*' handler={Home}/>
                </Route>
            </Router>
        );
    }
}