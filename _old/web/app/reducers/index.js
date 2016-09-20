const initState = {
    applicationTitle: "MyApp",
    isLoggedIn: false,
    form: {}
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
        case 'RESET_INPUT_FORM':
            return Object.assign({}, state, {
                form: {}
            });
        case 'LOGGED_IN':
            return Object.assign({}, state, {
                isLoggedIn: true,
                accessToken: action.token
            })
        case 'VALIDATION_ERROR':
            return Object.assign({}, state, {
                form: {...state.form,
                    errors: action.errors
                }
            })
        default:
            return state
    }
}

export default testFilter
