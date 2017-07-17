import { combineReducers } from 'redux';
import users from '../../auth/reducers/users';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    users: users,
    form: formReducer
});
