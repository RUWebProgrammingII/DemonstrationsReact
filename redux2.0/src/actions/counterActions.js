import { INCREMENT } from '../constants';

export const incrementCounter = counter => {
  return {
    type: INCREMENT,
    payload: counter,
  };
};
