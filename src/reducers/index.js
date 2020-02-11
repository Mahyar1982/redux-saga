import { combineReducers } from 'redux';
import UserReducers from './users';

export default combineReducers({
    users: UserReducers
});