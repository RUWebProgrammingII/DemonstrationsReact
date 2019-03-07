import { CHANGE_LANGUAGE } from '../constants';

export const changeLanguage = language => {
  return {
    type: CHANGE_LANGUAGE,
    payload: language
  }
}
