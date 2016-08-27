import store from '../store';
import * as Actions from './index'

export default () => {
    return async(dispatch) => {

        let state = store.getState();

        let errs = [];
        if (!state.app.form.name) {
            errs.push("name")
        }
        if (!state.app.form.pass) {
            errs.push("pass")
        }
        if (errs.length > 0) {
            dispatch({
                type: "VALIDATION_ERROR",
                errors: errs
            });
            return;
        }

        var auth = await fetch(`/auth/login?username=${state.app.form.name}&password=${state.app.form.pass}`).then(req => req.json());

        if (auth.success) {
            dispatch({
                type: 'LOGGED_IN',
                token: auth.token
            });
        } else {
            alert("NO")
        }
    }
}
