import { connect } from 'react-redux'
import { classSelector } from '../../infrastructure/validation'

import * as Actions from '../../actions/'

const control = ({onSubmit, actions, classSelector}) => {
  return (
  <div>
    <input type="text" onInput={actions.changeInput("name")} className={classSelector("name")} />
    <input type="text" onInput={actions.changeInput("pass")} className={classSelector("pass")}/>
    <button onClick={onSubmit}>Login</button>
  </div>)
}

const mapStateToProps = (state, ownProps) => {
  return {
    classSelector: (inputName) => classSelector(state,inputName)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: { changeInput: (name) => {  return (e) => { dispatch(Actions.formInput(name, e.target.value)) }   } },
    onSubmit: () => {dispatch(Actions.login())}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(control)
