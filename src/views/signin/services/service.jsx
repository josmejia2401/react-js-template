import * as api from './api';
import { signIn as signInAction } from "../../../redux/security.actions";

export const signIn = (data) => (dispatch, getState) => {
    data.username = data.username;
    data.password = data.password;//sha1(data.password);
    return new Promise(function (resolve, reject) {
        api.signIn(data).then(result => {
            if (result) {
                dispatch(signInAction(result));
            }
            resolve(result);
        }).catch(error => {
            reject(error);
        });
    });
}