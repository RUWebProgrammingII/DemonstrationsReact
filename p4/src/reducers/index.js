import { combineReducers } from 'redux';
import user from './userReducer';
import language from './languageReducer';

export default combineReducers({
    user,
    language
});
