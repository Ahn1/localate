import { connect } from 'react-redux'

import Pagelink from './pageLink'

const navigation = ({applicationTitle}) => {
  return (<ul className="navigation">
    <li className="navigationTitle">
      <a>{applicationTitle}</a>
    </li>
    <li>
      <Pagelink Page="/">Home</Pagelink>
    </li>

    <li>
      <Pagelink Page="/login">Login</Pagelink>
    </li>

  </ul>)
}

const mapStateToProps = (state, ownProps) => {
  return {
    applicationTitle: state.applicationTitle
  }
}


export default connect(
  mapStateToProps
)(navigation)
