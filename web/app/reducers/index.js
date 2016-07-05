const testFilter = (state = {title: "Test__"}, action) => {
  switch (action.type) {
    case 'SET_TITLE':
      return Object.assign({}, state, {title: "Changed!"})
    default:
      return state
  }
}

export default testFilter
