import {Component, PropTypes} from 'react';
import {Router, Route, Link, browserHistory} from 'react-router'
import DocumentTitle from "react-document-title"

export default class Home extends Component {
    render() {
        return (
            <DocumentTitle title='Home'>
                <div>
                    <h1>Roaawrrr!!!</h1>
                    <img className="dino" src="http://thumbs.dreamstime.com/z/funny-dinosaur-coloring-pages-high-quality-hand-drawing-illustration-picture-you-can-see-dino-great-picture-all-your-67659150.jpg"/>
                </div>
            </DocumentTitle>
        );
    }
}
