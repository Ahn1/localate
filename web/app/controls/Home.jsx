import {Component, PropTypes} from 'react';
import {Router, Route, Link, browserHistory} from 'react-router'
import DocumentTitle from "react-document-title"

export default class Home extends Component {
    render() {
        return (
            <DocumentTitle title='Home'>
                <div>Hallo</div>
            </DocumentTitle>
        );
    }
}
