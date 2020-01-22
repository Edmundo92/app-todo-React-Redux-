import React from 'react';
import IconButton from '../template/icon-button';
import '../index.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { markAsDone, markAsPending, remove } from './todoActions';

const TodoList = (props) => {

    const renderRows = () => {
        const lista = props.list || [];
        return props.list.map((todo, index) => {
            return (
                <tr key={index}>
                    <td>{ index + 1 }</td>
                    <td className={todo.done ? 'done' : ''}>{ todo.description }</td>
                    <td>
                        <IconButton style='success' hide={!todo.done} icon='c' 
                            handleClick={ () => props.markAsDone(todo) }/>
                        <IconButton style='warning' hide={todo.done} icon='p' 
                            handleClick={ () => props.markAsPending(todo) }/>
                        <IconButton style='danger' hide={todo.done} icon='x' 
                            handleClick={ () => props.remove(todo) }/>
                    </td>
                </tr>
            )
        })

    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Descricao</th>
                    <th className='widthRow'>Acoes</th>
                    </tr>
                </thead>
                <tbody>
                    { renderRows() }                    
                </tbody>
            </table>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        list: state.todo.list
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);