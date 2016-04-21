import {Component, PropTypes} from 'react';
import {Link, hashHistory} from 'react-router'
import If from './shared/If.jsx'

import AppStateStore from '../stores/AppStateStore.js'
import LoginStore from '../stores/LoginStore.js'
import actions from '../stores/actions.js'

export default class Navigation extends Component {

    constructor() {
        super()

        AppStateStore.on("ChangeState", (options) => {
            console.log(options);
            this.setState({title: options.map, isLoggedIn: options.loggedIn, write: options.access.write, read: options.access.read});

        })

        this.state = {
            title: "",
            isLoggedIn: false,
            read: false,
            write: false
        };
    }

    async Logout() {
        actions.logoff();
        await LoginStore.WaitForEvent("LoginChanged")
        hashHistory.push('/');
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

                <If test={this.state.read}>
                    <li>
                        <Link to={`/map`} activeClassName="active">Karte</Link>
                    </li>
                </If>

                <If test={this.state.isLoggedIn}>
                    <If test={this.state.write}>
                        <li>
                            <Link to={`/Addspot`} activeClassName="active">Ort hinzufügen</Link>
                        </li>
                    </If>
                </If>
                <If test={this.state.isLoggedIn}>
                    <li>
                        <a onClick={() => this.Logout()}>Logout</a>
                    </li>
                </If>

                <If test={!this.state.isLoggedIn}>
                    <li>
                        <Link to={`/login`} activeClassName="active">Login</Link>
                    </li>
                </If>

            </ul>
        );
    }
}
