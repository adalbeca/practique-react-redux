import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import * as serviceWorker from './serviceWorker';
// Import Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// initialize  State, Reducer,  and Store
// i begin with the state, remember this is a object.
const state= { cantidad: 1 };

// now, declare the reducer, get first param the state, and second the action and return new state.
const reducer = (state, action) => {
    let newState = Object.assign({},state);
    if (action.type==="AUM") {
        newState.cantidad=state.cantidad+1;
    } else {
        newState.cantidad=state.cantidad-1;
    }
    return newState
};


// now declare store, get 2 param, first the function reducer and later the state.
const store = createStore(reducer, state);

// in the render add Component Provider with de props store
ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);


serviceWorker.unregister();
