import Navigation from './navigation'
import {Component, PropTypes} from 'react';

export default class Form extends Component {

    render() {
        return (
          <form>
            {this.props.children}
          </form>
        );
    }
}
