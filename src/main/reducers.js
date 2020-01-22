import { combineReducers } from 'redux';
import { changeDescriptionReducer } from '../todo/todoReducer';

const rootReducers = combineReducers({
    todo: changeDescriptionReducer
})

export default rootReducers;