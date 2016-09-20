export function classSelector(state, inputName) {
    let errClass = "input-error";
    let nClass = "input";

    if (!state.app.form)
        return errClass;
    if (!state.app.form.errors)
        return nClass;
    if (state.app.form.errors.indexOf(inputName) > -1)
        return errClass
    else
        return nClass

}
