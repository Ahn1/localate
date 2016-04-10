import {Component, PropTypes} from 'react';
import {Router, Route, Link, hashHistory} from 'react-router'
import DocumentTitle from "react-document-title"

import actions from '../stores/actions.js'
import LoginStore from '../stores//LoginStore.js'

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            password: ""
        }

        LoginStore.on("LoginChanged",(e) => this.onLogin(e));

    }

    onLogin(){
      hashHistory.push('/');
    }

    handleChange(sender) {
        var field = sender.target.getAttribute("data-field")
        var change = {};
        change[field] = sender.target.value;
        this.setState(change);
    }

    submit() {
        actions.login({name: this.state.name, password: this.state.password});
    }

    render() {
        return (
            <DocumentTitle title='Login'>
                <div>
                    <input type="text" value={this.state.name} data-field="name" onChange={(e) => this.handleChange(e)}/>
                    <input type="text" value={this.state.password} data-field="password" onChange={(e) => this.handleChange(e)}/>
                    <input type="button" onClick={() => this.submit()} value="Einloggen"/>
                </div>
            </DocumentTitle>
        );
    }
}
