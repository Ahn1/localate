import {Component, PropTypes} from 'react';
import {Link} from 'react-router'

import AppStateStore from '../stores/AppStateStore.js'

export default class Navigation extends Component {

    constructor(){
      super()

      AppStateStore.on("ChangeState",(options) => {
        this.setState({title: options.map});
      })

      this.state = {title: ""};
    }

    render() {
        return (
            <ul className="navigation">
                <li>
                    <a>{this.state.title}</a>
                </li>
                <li>
                    <Link to={`/home`} activeClassName="active">Home</Link>
                </li>
                <li>
                    <Link to={`/Addspot`} activeClassName="active">Ort hinzufügen</Link>
                </li>
                <li>
                    <Link to={`/products`} activeClassName="active">Produkte</Link>
                </li>
                <li>
                    <Link to={`/contact`} activeClassName="active">Kontakt</Link>
                </li>
            </ul>
        );
    }
}
