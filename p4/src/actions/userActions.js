import { UPDATE_USER } from '../constants';

export const updateUser = newUser => {
  console.log(newUser);
  return {
    type: UPDATE_USER,
    payload: newUser
  };
};
