import is from '../../localization/pro-gamers.is.json';
import en from '../../localization/pro-gamers.en.json';
import { CHANGE_LANGUAGE } from '../constants';

const languages = { is, en };

export default function(state = en, action) {
    switch (action.type) {
        case CHANGE_LANGUAGE: return languages[action.payload];
        default: return state;
    };
}
