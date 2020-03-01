import { combineReducers } from 'redux';
import counter from './counterReducer';
import user from './userReducer';
import weather from './weatherReducer';

export default combineReducers({
  counter,
  user,
  weather,
});
