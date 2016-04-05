import {Component, PropTypes} from 'react';
import {Link} from 'react-router'

export default class Navigation extends Component {

    render() {
        return (
            <ul className="navigation">
                <li>
                    <Link to={`/home`} activeClassName="active">Home</Link>
                </li>
                <li>
                    <Link to={`/about`} activeClassName="active">About</Link>
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
