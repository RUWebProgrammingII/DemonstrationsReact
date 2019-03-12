import { combineReducers } from 'redux';
import user from './userReducer';
import language from './languageReducer';

export default combineReducers({
  /* This is the Redux store state structure */
  user,
  language
});
