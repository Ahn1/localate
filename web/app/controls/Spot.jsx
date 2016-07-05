import {Component, PropTypes} from 'react';
import {Router, Route, Link, hashHistory} from 'react-router'
import DocumentTitle from "react-document-title"

import actions from '../stores/actions.js'

import CurrentSpotStore from '../stores/CurrentSpotStore.js'

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
          name: ""
        }
    }

    Init(){
      actions.ChangeSpot({id: this.props.params.spotId})
    }

    componentDidMount(){
      this.Init();
    }
    componentDidUpdate(){
      this.Init();
    }

    render() {
        return (
            <DocumentTitle title={this.state.name}>


              <input type="hidden" value={this.props.params.spotId} />
            </DocumentTitle>
        );
    }
}
