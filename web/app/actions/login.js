import store from '../store';

export default () => {
    return async(dispatch) => {

        let state = store.getState();

        var auth = await fetch(`/auth/login?username=${state.app.form.name}&password=${state.app.form.pass}`).then(req => req.json());

        if (auth.success) {
            dispatch({
                type: 'LOGGED_IN'
            });
        } else {
            alert("NO")
        }
    }
}
