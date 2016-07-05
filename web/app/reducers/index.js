const initState = {title: "MyApp"};

const testFilter = (state = initState, action) => {
  switch (action.type) {
    case 'SET_TITLE':
      return Object.assign({}, state, {title: action.title})
    default:
      return state
  }
}

export default testFilter
