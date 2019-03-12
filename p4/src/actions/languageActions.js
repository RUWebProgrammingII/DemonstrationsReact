import { CHANGE_LANGUAGE } from '../constants';

export const changeLanguage = languageSelection => {
    return {
        type: CHANGE_LANGUAGE,
        payload: languageSelection
    };
};
