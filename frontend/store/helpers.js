
function globalReducer(state, action) {
    switch (action.type) {
        case 'setEmail':
            return { ...state, navEmailAddres: action.payload };
            break;
    }
}
export {
    globalReducer
};