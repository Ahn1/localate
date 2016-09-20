import {Component, PropTypes} from 'react';
import {Router, Route, Link, browserHistory} from 'react-router'
import DocumentTitle from "react-document-title"
import If from './shared/If.jsx'

import actions from '../stores/actions.js'
import MapOverviewStore from '../stores/MapOverviewStore.js'
import MapStore from '../stores/MapStore.js'
import AppStateStore from '../stores/AppStateStore.js'

import MapMarkersLayer from './shared/MapMarkersLayer'

import {Map, Marker, Popup, TileLayer} from 'react-leaflet';

class MapControl extends Component {

    constructor() {
        super();

        this.state = {
            spots: [],
            box: [
                [
                    52.675499, 13.76134
                ],
                [52.33812, 13.0884]
            ]
        }

        this.Init();
    }

    async Init() {
        await AppStateStore.EnsureInitialized();

        this.setState({bounds: MapStore.mapInfo.Bounds})

        actions.LoadOverviewSpots({box: this.state.box});
        var spots = await MapOverviewStore.WaitForEvent("GotSpots");
        this.setState({spots: spots})
    }

    render() {
        return (
            <div>
                <Map bounds={this.state.bounds} zoom={13} style={{
                    height: "400px",
                    width: "100%",
                    cursor: "pointer"
                }}>
                    <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
                    <MapMarkersLayer box={this.state.box}/>
                </Map>
            </div>
        );
    }
}

export default MapControl;
