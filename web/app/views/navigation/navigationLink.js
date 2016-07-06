import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from '../../actions/'

const navigationLink = ({actions,children}) => {
  return (<a href="#" onClick={actions.setTitle}>{children}</a>)
}


const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

function mapDispatchToProps(dispatch) {
  let i = 0;
  return {
    actions: { setTitle: () => {dispatch(Actions.setTitle(`NEU ${i++}`))} }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(navigationLink)
