export default (name,newValue) => {
  return (dispatch) => {
    dispatch({
      type: 'FORM_INPUT',
      newValue: newValue,
      name
    });
  }
}
