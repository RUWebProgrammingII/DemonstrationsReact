
const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CHANGE_USER': return action.payload;
        default: return state;
    }
};

export default userReducer;
