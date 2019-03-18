import weatherService from '../services/weatherService';

export const increment = (number) => {
    return {
        type: 'INCREMENT',
        payload: number
    };
};

export const changeUser = (name, age) => {
    return {
        type: 'CHANGE_USER',
        payload: { name, age }
    };
};

export const getCurrentDegree = () => {
    return (dispatch) => {
        return weatherService.getCurrentDegree().then(data => {
            dispatch(getCurrentDegreeSuccess(data));
        });
    };
};

const getCurrentDegreeSuccess = (currentDegree) => {
    return {
        type: 'GET_CURRENT_DEGREE',
        payload: currentDegree
    };
};
