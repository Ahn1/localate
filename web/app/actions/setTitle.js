export const setTitle = (newTitle) => {
  return dispatch () => {
    dispatch({
      type: 'SET_TITLE',
      title: newTitle
    });
  }
}
