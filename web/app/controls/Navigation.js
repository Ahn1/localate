import {Component, PropTypes} from 'react';

export default class Navigation extends Component {

  render() {
    return (
      <ul className="navigation">
        <li>
          <a href="#">Home</a>
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
