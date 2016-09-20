import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Router, Route, Link, browserHistory } from 'react-router'

import * as Actions from '../../actions/'

const navigationLink = ({actions,children,Page}) => {
  return (<Link to={Page}>{children}</Link>)
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: { setTitle: () => {dispatch(Actions.setTitle(`NEU ${i++}`))} }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(navigationLink)
