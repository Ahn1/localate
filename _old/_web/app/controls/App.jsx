import {Component, PropTypes} from 'react';
import {Router, Route, Link, browserHistory} from 'react-router'

import Navigation from './Navigation'

export default class App extends Component {

    render() {
        return (
            <div>
                <Navigation></Navigation>
                <div className="siteContent">{this.props.children}</div>
            </div>
        );
    }
}
