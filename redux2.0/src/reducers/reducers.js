import userReducer from './userReducer';
import counterReducer from './counterReducer';
import weatherReducer from './weatherReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    user: userReducer,
    counter: counterReducer,
    currentDegree: weatherReducer
});
