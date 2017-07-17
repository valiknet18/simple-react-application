import parameters from '../../environment';
import { SET_PROFILE, LOGOUT_USER } from '../constants/users';

const localStorage = window.localStorage;
const fetch = window.fetch;

const defaultHeaders = {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
};

const defaultHeadersWithAuthorization = Object.assign({}, defaultHeaders, {
    'Authorization': 'Bearer ' + localStorage.getItem('token')
});

export function loginUser(form) {
    return async (dispatch) => {
        const options = {
            method: 'POST',
            body: JSON.stringify({
                username: form.username,
                password: form.password
            }),
            headers: defaultHeaders
        };

        let response = await fetch(parameters.host + "/login", options);
        let data = await response.json();

        switch (response.status) {
            case 201:
                localStorage.setItem('token', data.token);
                dispatch(setUser(data.profile));
                break;

            case 422:
                break;
        }
    }
}

export function getProfile() {
    return async (dispatch) => {
        const options = {
            method: 'GET',
            headers: defaultHeadersWithAuthorization
        };

        let response = await fetch(parameters.host + "/profile/self", options);
        let data = await response.json();

        switch (response.status) {
            case 200:
                dispatch(setUser(data));
                break;

            case 401:
                localStorage.removeItem('token');
                break;
        }
    }
}

export function userLogout() {
    return (dispatch) => {
        localStorage.removeItem('token');
        dispatch(logoutUser());
    }
}

function setUser(profile) {
    return {
        type: SET_PROFILE,
        profile: profile
    }
}

function logoutUser() {
    return {
        type: LOGOUT_USER
    }
}
