import { CHANGE_LANGUAGE } from '../constants';

import is /* Valid JS representation of the JSON */ from '../../localization/pro-gamers.is.json';
import en /* Valid JS representation of the JSON */ from '../../localization/pro-gamers.en.json';

const languages = {
  is, en
};

export default function(state = languages['is'], action) {
  switch (action.type) {
    case CHANGE_LANGUAGE: return languages[action.payload];
    default: return state;
  };
};
