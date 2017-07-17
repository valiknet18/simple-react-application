import { SET_PROFILE, LOGOUT_USER } from '../constants/users';

let initialState = {
    profile: null
};

export default function users(state = initialState, action) {
    switch (action.type) {
        case SET_PROFILE:
            return Object.assign({}, state, {
                profile: action.profile
            });
        case LOGOUT_USER:
            return Object.assign({}, state, {
                profile: null
            });
        default:
            return state;
    }
}
