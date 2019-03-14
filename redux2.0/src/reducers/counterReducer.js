import { INCREMENT } from '../constants';

export default function(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      console.log(action.payload);
      return state + action.payload;
    default: return state;
  }
};
