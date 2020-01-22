import React from 'react';
import { Router, Route, Switch, Redirect } from "react-router-dom";

import Todo from '../todo';
import About from '../about';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/todos" component={Todo} />
            <Route path="/about"> <About /> </Route>
            <Redirect from='*' to='/todos' />
        </Switch>
    )
}

/**
 * 
 */

export default Routes;