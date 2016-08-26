import { connect } from 'react-redux'

import Navigationlink from './navigationLink'

const navigation = ({applicationTitle}) => {
  return (<ul className="navigation">
    <li className="navigationTitle">
      <a>{applicationTitle}</a>
    </li>
    <li>
      <Navigationlink>Home</Navigationlink>
    </li>

    <li>
      <Navigationlink>Login</Navigationlink>
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
