import axios from 'axios';
const URL = 'http://localhost:3004/todos';

export const changeDescriptionAction = (e) => {
    return {
        type: 'DESCRIPTION_CHANGED',
        payload: e.target.value
    }
}

export const search = (description = '') => {
    let search = description ? `?description_like=${description}` : '';
    const request = axios.get(`${URL}${search}`);
    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
}

export const add = (description) => {
    return dispatch => {
        axios.post(URL, { description, done: false})
            .then(resp => dispatch(clear()))
            //.then(resp => dispatch(search()))
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo.id}`, { ...todo, done: true })
        .then(resp => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo.id}`, { ...todo, done: false })
            .then(resp => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo.id}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [{ type: 'TODO_CLEAR' }, search()]
}