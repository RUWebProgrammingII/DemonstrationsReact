import weatherService from '../services/weatherService';
import { GET_CURRENT_DEGREE } from '../constants';

export const getCurrentDegree = () => {
  return dispatch => {
    return weatherService.getCurrentDegree().then(d => {
      dispatch(getCurrentDegreeSuccess(d));
    });
  };
};

const getCurrentDegreeSuccess = degree => {
  return {
    type: GET_CURRENT_DEGREE,
    payload: degree
  };
};
