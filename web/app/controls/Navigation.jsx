import {Component, PropTypes} from 'react';
import {Link} from 'react-router'

import ApplicationStore from '../stores/ApplicationStore.js'

export default class Navigation extends Component {

    constructor(){
      super()

      ApplicationStore.on("InitApp",(options) => {
        this.setState({title: options.name});
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
