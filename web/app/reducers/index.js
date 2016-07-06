const initState = {
  applicationTitle: "MyApp",
  isLoggedIn: false
};

const testFilter = (state = initState, action) => {
  switch (action.type) {
    case 'SET_TITLE':
      return Object.assign({}, state, {applicationTitle: action.title})
    default:
      return state
  }
}

export default testFilter
