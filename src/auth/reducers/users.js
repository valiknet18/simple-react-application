import { SET_PROFILE } from '../constants/users';

let initialState = {
    profile: null
};

export default function users(state = initialState, action) {
    switch (action.type) {
        case SET_PROFILE:
            return Object.assign({}, state, {
                profile: action.profile
            });
        default:
            return state;
    }
}
