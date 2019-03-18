import { CHANGE_USER } from '../constants';

export default function(state = {}, action) {
  switch (action.type) {
    case CHANGE_USER:
      console.log(action.payload);
      return action.payload;
    default: return state;
  }
};
