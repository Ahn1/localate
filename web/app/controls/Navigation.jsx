import {Component, PropTypes} from 'react';
import {Router, Route, Link, browserHistory} from 'react-router'

export default class Navigation extends Component {

  render() {
    return (
      <ul className="navigation">
        <li>
          <Link to={`/home`}>Home</Link>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    );
  }
}
