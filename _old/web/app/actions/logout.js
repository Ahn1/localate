import store from '../store';
import * as Actions from './index'

export default () => {
    return async(dispatch) => {
        dispatch({
            type: "LOGGED_OUT"
        });
    }
}
