import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise'
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import Menu from '../template/menu';
import Routes from './routes';
import rootReducers from './reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
/**
 * nesse caso estamos a usar o applyMiddleware e o promise, porq estamos a fazer uma chama assincrona e o nosso action retorna 
 * um chamada ou uma promisse n resolvida
 */
/**
 * multi - esse midleware permite disparar várias acoes dentro de uma ínica func de action.
 */
const store = applyMiddleware(thunk, multi, promise)(createStore)(rootReducers, devTools);

function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <Router>
          <Menu />
          <Routes />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
