import {Component, PropTypes} from 'react';
import {Router, Route, Link, browserHistory} from 'react-router'
import DocumentTitle from "react-document-title"

export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            name: "Unbenannt"
        }
    }

    handleChange(sender) {
        var field = sender.target.getAttribute("data-field")
        var change = {};
        change[field] = sender.target.value;
        this.setState(change);
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.name} data-field="name" onChange={(e) => this.handleChange(e)}/>
            </div>
        );
    }
}
