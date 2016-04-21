import {Component, PropTypes} from 'react';
import {Router, Route, Link, browserHistory} from 'react-router'
import DocumentTitle from "react-document-title"

import actions from '../stores/actions.js'
import SpotStore from '../stores/SpotStore.js'
import PositionStore from '../stores/PositionStore.js'

import {Map, Marker, Popup, TileLayer} from 'react-leaflet';

export default class Home extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div >
            
            </div>
        );
    }
}
