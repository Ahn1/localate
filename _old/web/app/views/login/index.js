import { connect } from 'react-redux'
import { classSelector } from '../../infrastructure/validation'

import * as Actions from '../../actions/'

const control = ({onSubmit, actions, classSelector,username,password}) => {
  return (
  <div>
    <input type="text" onChange={actions.changeInput("name")} className={classSelector("name")} value={username} />
    <input type="text" onChange={actions.changeInput("pass")} className={classSelector("pass")} value={password}/>
    <button onClick={onSubmit}>Login</button>
  </div>)
}

const mapStateToProps = (state, ownProps) => {
  return {
    classSelector: (inputName) => classSelector(state,inputName),
    username: state.app.form.name,
    password: state.app.form.pass
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
