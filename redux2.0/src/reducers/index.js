import { combineReducers } from 'redux';
import user from './userReducer';
import counter from './counterReducer';
import weather from './weatherReducer';

export default combineReducers({
  user,
  counter,
  weather
});
