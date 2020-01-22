import React, { Component } from 'react';
import Grid from '../template/grid';
import IconButton from '../template/icon-button';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeDescriptionAction, search, add, clear } from './todoActions';

class TodoForm extends Component {

    constructor(props) {
        super(props);

        this.keyHandler = this.keyHandler.bind(this);
    }

    componentWillMount() {
        this.props.search()
    }
    
    keyHandler = (e) => {
        const { add, search, description, clear } = this.props;
        if(e.key === 'Enter') {
            e.shiftKey ? search() : add(description);
        } else if(e.key === 'Escape') {
            clear();
        }
    }

    render() {
        const { add, search, description, clear } = this.props;

        return (
            <div className='todoForm row'>
                <Grid cols='12 11 11'>
                    <input type="text" 
                    value={this.props.description} 
                    id="description" 
                    className="form-control" 
                    placeholder="Adicione uma tarefa"
                    onKeyUp={this.props.keyHandler}
                    onChange={this.props.changeDescriptionAction}/>
                </Grid>
                <Grid cols='12 1 1'>
                    <IconButton 
                        hide={true} 
                        style='primary' 
                        icon='+' 
                        handleClick={() => add(description)}/>
                    <IconButton 
                        hide={true} 
                        style='info' 
                        icon='procurar' 
                        handleClick={() => search(description)}/>
                    <IconButton 
                        hide={true} 
                        style='default' 
                        icon='limpar' 
                        handleClick={() => clear()}/>
                </Grid>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        description: state.todo.description
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({changeDescriptionAction, search, add, clear }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);