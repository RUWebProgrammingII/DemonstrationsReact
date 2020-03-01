import weatherService from '../services/weatherService';
import { GET_CURRENT_DEGREE } from '../constants';

export const getCurrentDegree = () => async dispatch => {
  try {
    const mainTemp = await weatherService.getCurrentDegree();
    dispatch(getCurrentDegreeSuccess(mainTemp));
  } catch (err) {
    // TODO: Handle error
  }
};

const getCurrentDegreeSuccess = mainTemp => {
  return {
    type: GET_CURRENT_DEGREE,
    payload: mainTemp,
  };
};
