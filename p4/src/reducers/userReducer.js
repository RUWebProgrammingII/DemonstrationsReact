import { UPDATE_USER } from '../constants';

const initialState = {
  fullName: '',
  encodedImg: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      console.log(action);
      return action.payload;
    default: return state;
  }
};
