import parameters from '../../environment';
import { SET_PROFILE } from '../constants/users';

const localStorage = window.localStorage;
const fetch = window.fetch;

export function loginUser(form) {
    return (dispatch) => {
        console.log(form);

        const options = {
            method: 'POST',
            body: JSON.stringify({
                username: form.username,
                password: form.password
            }),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        };

        fetch(parameters.host + "/login", options)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                localStorage.setItem('token', data.token);

                dispatch(setUser(data.profile));
            })
    }
}

function setUser(profile) {
    return {
        type: SET_PROFILE,
        profile: profile
    }
}
