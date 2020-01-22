const INITIAL_VALUE = {
    description: '',
    list: []
}

export const changeDescriptionReducer = (state = INITIAL_VALUE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED': return { ...state, description: action.payload };
        case 'TODO_SEARCHED': return { ...state, list: action.payload.data };
        // case 'TODO_ADDED': 
        case 'TODO_CLEAR': return { ...state, description: '' };
        // case 'TODO_PENDENT': return { ...state, done: action.payload.done }
        // case 'TODO_FINISH': return { ...state, done: action.payload.done }
        default:
            return state;
    }
}