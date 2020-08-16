import reducer from './reducer';
// On met en place un MiddleWare : interface entre Redux et une api
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
export default createStore(reducer, applyMiddleware(thunk));

/* import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import initialState from './initialState';

const store = createStore(reducer, initialState)

export default props => <Provider store={store} {...props}/> */