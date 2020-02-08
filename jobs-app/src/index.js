import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import rootReducer from './store/Reducers/root-reducer.js';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import * as serviceWorker from './serviceWorker';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk)));


const app = (
    <Provider store={store}>
         <App />
    </Provider>
)



ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
