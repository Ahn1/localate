import { connect } from 'react-redux'

import Pagelink from './pageLink'
import If from '../If'

const navigation = ({applicationTitle,isLoggedIn}) => {
  return (<ul className="navigation">
    <li className="navigationTitle">
      <a>{applicationTitle}</a>
    </li>
    <li>
      <Pagelink Page="/">Home</Pagelink>
    </li>

    <If test={!isLoggedIn}>
      <li>
        <Pagelink Page="/login">Login</Pagelink>
      </li>
    </If>
    <If test={isLoggedIn}>
      <li>
        <Pagelink Page="/">Logout</Pagelink>
      </li>
    </If>

  </ul>)
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    applicationTitle: state.app.applicationTitle,
    isLoggedIn: state.app.isLoggedIn
  }
}


export default connect(
  mapStateToProps
)(navigation)
