import {Component, PropTypes} from 'react';
import {Link} from 'react-router'
import If from './shared/If.jsx'

import AppStateStore from '../stores/AppStateStore.js'

export default class Navigation extends Component {

    constructor() {
        super()

        AppStateStore.on("ChangeState", (options) => {
            this.setState({title: options.map, isLoggedIn: options.loggedIn});
        })

        this.state = {
            title: "",
            isLoggedIn: false
        };
    }

    render() {
        return (
            <ul className="navigation">
                <li>
                    <a>{this.state.title}</a>
                </li>
                <li>
                    <Link to={`/home`} activeClassName="active">Home</Link>
                </li>
                <If test={this.state.isLoggedIn}>
                    <li>
                        <Link to={`/Addspot`} activeClassName="active">Ort hinzufügen</Link>
                    </li>
                </If>
                <li>
                    <Link to={`/products`} activeClassName="active">Produkte</Link>
                </li>
                <If test={!this.state.isLoggedIn}>
                    <li>
                        <Link to={`/login`} activeClassName="active">Login</Link>
                    </li>
                </If>
            </ul>
        );
    }
}
