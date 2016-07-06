export default (newTitle) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_TITLE',
      title: newTitle
    });
  }
}
