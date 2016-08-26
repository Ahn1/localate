import { connect } from 'react-redux'

import * as Actions from '../../actions/'

const control = ({onSubmit, actions}) => {
  return (
  <div>
    <input type="text" onInput={actions.changeInput("name")} />
    <input type="text" onInput={actions.changeInput("pass")}/>
    <button onClick={onSubmit} />
  </div>)
}

const mapStateToProps = (state, ownProps) => {
  return {
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
