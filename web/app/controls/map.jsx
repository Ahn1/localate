import {Component, PropTypes} from 'react';
import {Router, Route, Link, browserHistory} from 'react-router'
import DocumentTitle from "react-document-title"
import If from './shared/If.jsx'

import actions from '../stores/actions.js'
import MapOverviewStore from '../stores/MapOverviewStore.js'
import MapStore from '../stores/MapStore.js'
import AppStateStore from '../stores/AppStateStore.js'

import {Map, Marker, Popup, TileLayer} from 'react-leaflet';

export default class MapControl extends Component {

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
        let markers = this.state.spots.map(spot => {
            return (
                <Marker position={[spot.location.coordinates[1], spot.location.coordinates[0]]}>
                    <Popup>
                        <span>{spot.name}</span>
                    </Popup>
                </Marker>
            );
        });

        return (
            <div>
                <Map bounds={this.state.bounds} zoom={13} style={{
                    height: "400px",
                    width: "100%",
                    cursor: "pointer"
                }} onClick={(e) => this.onMouseMoved(e)}>
                    <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
                    {this.state.spots.map(spot => {
                        return (
                            <Marker key={spot._id} position={[spot.location.coordinates[1], spot.location.coordinates[0]]}>
                                <Popup>
                                    <span>{spot.name}</span>
                                </Popup>
                            </Marker>
                        );
                    }) || <span/>}
                </Map>
            </div>
        );
    }
}
