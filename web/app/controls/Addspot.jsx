import {Component, PropTypes} from 'react';
import {Router, Route, Link, browserHistory} from 'react-router'
import DocumentTitle from "react-document-title"

import actions from '../stores/actions.js'
import SpotStore from '../stores/SpotStore.js'

import {Map, Marker, Popup, TileLayer} from 'react-leaflet';

export default class Home extends Component {

    constructor() {
        super();

        let startPosition = {lat: 52.508883, long: 13.393697}

        this.state = {
            name: "",
            lat: startPosition.lat,
            long: startPosition.long,
            focusLat: startPosition.lat,
            focusLong: startPosition.long,
            desc: ""
        }
    }

    handleChange(sender) {
        var field = sender.target.getAttribute("data-field")
        var change = {};
        change[field] = sender.target.value;
        this.setState(change);
    }

    submit() {
        actions.AddSpot(this.state);
    }

    onMouseMoved(e){
      this.setState({lat: e.latlng.lat, long: e.latlng.lng});
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.name} data-field="name" placeholder="name" onChange={(e) => this.handleChange(e)}/>

                <Map center={[this.state.focusLat, this.state.focusLong]} zoom={13} style={{
                    height: "400px",
                    width: "100%",
                    cursor: "pointer"
                }} onClick={(e) => this.onMouseMoved(e)}>
                    <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
                    <Marker position={[this.state.lat, this.state.long]}>
                        <Popup>
                            <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
                        </Popup>
                    </Marker>
                </Map>

                <input type="text" value={this.state.desc} data-field="desc" placeholder="desc" onChange={(e) => this.handleChange(e)}/>
                <input type="button" onClick={() => this.submit()} value="Hinzufügen"/>
            </div>
        );
    }
}
