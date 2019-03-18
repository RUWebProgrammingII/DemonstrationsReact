
const weatherReducer = (state = 0, action) => {
    switch (action.type) {
        case 'GET_CURRENT_DEGREE': return action.payload;
        default: return state;
    };
};

export default weatherReducer;
