import { connect } from 'react-redux'
import { setTitle } from '../actions'

/*
const header = (props) => {console.log(props.title); return (<h1 onClick={props.onClick}>{props.title}</h1>)}


const mapStateToProps = (state, ownProps) => {
  return {
    title: state.title
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      alert("a");
      dispatch(setTitle(ownProps.filter));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(header);

*/

export default () => {
  return (
    <div>
      ABC
    </div>);
};
