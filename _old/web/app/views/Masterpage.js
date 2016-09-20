import Navigation from './navigation'
import {Component, PropTypes} from 'react';

export default class Masterpage extends Component {

    render() {
        return (
          <div>
            <Navigation />
            {this.props.children}
          </div>
        );
    }
}
