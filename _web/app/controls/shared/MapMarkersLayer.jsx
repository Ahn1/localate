import {Component, PropTypes} from 'react';
import actions from '../../stores/actions.js'
import MapOverviewStore from '../../stores/MapOverviewStore.js'
import {Marker, Popup, LayerGroup} from 'react-leaflet';
import {Link, hashHistory} from 'react-router'

class MapMarkersLayer extends Component {
    constructor() {
        super();
        this.state = {
            spots: []
        }
    }

    componentDidMount() {
        this.Init();
    }

    async Init() {
        actions.LoadOverviewSpots({box: this.props.box});
        var spots = await MapOverviewStore.WaitForEvent("GotSpots");
        this.setState({spots: spots})
    }
    render() {
        let markers = this.state.spots.map(spot => {
            return (
                <Marker key={spot._id} position={[spot.location.coordinates[1], spot.location.coordinates[0]]}>
                    <Popup>
                        <a href={`/#/spot/${spot._id}`}>{spot.name}</a>
                    </Popup>
                </Marker>
            );
        });

        return <LayerGroup map={this.props.map} layerContainer={this.props.layerContainer}>{markers}</LayerGroup>;
    }
}

export default MapMarkersLayer;
