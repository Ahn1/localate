const initState = {
    applicationTitle: "MyApp",
    isLoggedIn: false
};

const testFilter = (state = initState, action) => {
    switch (action.type) {
        case 'SET_TITLE':
            return Object.assign({}, state, {
                applicationTitle: action.title
            })
        case 'FORM_INPUT':
            return Object.assign({}, state, {
                form: {...state.form,
                    [action.name]: action.newValue
                }
            })
        case 'LOGGED_IN':
            return Object.assign({}, state, {
                isLoggedIn: true
            })
        default:
            return state
    }
}

export default testFilter
