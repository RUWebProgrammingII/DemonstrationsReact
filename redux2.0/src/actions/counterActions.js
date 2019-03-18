import { INCREMENT } from '../constants';

export const increment = number => {
  return {
    type: INCREMENT,
    payload: number
  };
};
