import {Component, PropTypes} from 'react';
import {Router, Route, Link, browserHistory} from 'react-router'
import DocumentTitle from "react-document-title"

import actions from '../stores/actions.js'
import SpotStore from '../stores/SpotStore.js'

export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            lat: "",
            long: "",
            desc: ""
        }
    }

    handleChange(sender) {
        var field = sender.target.getAttribute("data-field")
        var change = {};
        change[field] = sender.target.value;
        this.setState(change);
    }

    submit(){
      actions.AddSpot(this.state);
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.name} data-field="name" placeholder="name" onChange={(e) => this.handleChange(e)}/>
                <input type="text" value={this.state.lat} data-field="lat" placeholder="lat" onChange={(e) => this.handleChange(e)}/>
                <input type="text" value={this.state.long} data-field="long" placeholder="long" onChange={(e) => this.handleChange(e)}/>
                <input type="text" value={this.state.desc} data-field="desc" placeholder="desc" onChange={(e) => this.handleChange(e)}/>
                <input type="button" onClick={() => this.submit()} value="Hinzufügen"/>
            </div>
        );
    }
}
