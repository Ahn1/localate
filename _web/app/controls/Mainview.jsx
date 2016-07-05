import {Component, PropTypes} from 'react';

import App from './App'
import Home from './Home'
import Addspot from './Addspot'
import map from './map'
import Login from './Login'
import Spot from './Spot'

import {Router, Route, Link, hashHistory} from 'react-router'

export default class Menu extends Component {

    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <Route path="home" component={Home}/>
                    <Route path="Addspot" component={Addspot}/>
                    <Route path="map" component={map}/>
                    <Route path="login" component={Login}/>
                    <Route path="spot/:spotId" component={Spot}/>
                    <Route path='*' handler={Home}/>
                </Route>
            </Router>
        );
    }
}
