import React from 'react';
import PageHeader from '../template/pageHeader';
import TodoForm from './todo-form';
import TodoList from './todo-list';

const Todo = () => {

    return (
        <div>
            <PageHeader name='Tarefas' small='cadastro' />
            <TodoForm />
            <TodoList />
        </div>
    )
}

export default Todo;

/**
 * https://github.com/redux-utilities/redux-promise
 * https://github.com/ashaffer/redux-multi
 * https://github.com/reduxjs/redux-thunk
 * 
 * https://create-react-app.dev/docs/post-processing-css/
 * https://github.com/typicode/json-server#filter
 * https://reactjsexample.com/react-simple-infinite-carousel-with-lazy-loading-and-responsive-support/
 * https://redux.js.org/api/applymiddleware/
 */