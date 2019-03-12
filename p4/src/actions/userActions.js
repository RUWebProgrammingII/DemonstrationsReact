import { UPDATE_USER } from '../constants';

export const updateUser = newUser => {
    return {
        type: UPDATE_USER,
        payload: newUser
    };
}
