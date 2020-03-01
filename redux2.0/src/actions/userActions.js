import { CHANGE_USER } from '../constants';

export const changeUser = (name, age) => {
  return {
    type: CHANGE_USER,
    payload: { name, age },
  };
};
