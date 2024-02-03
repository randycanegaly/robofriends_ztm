import React from 'react';
// import ReactDOM from 'react-dom'; The new way to import createRoot:
import { createRoot } from "react-dom/client";
import './index.css';
import App from './containers/App';
import 'tachyons';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchRobots, requestRobots } from './reducers';
import { createLogger } from 'redux-logger'
import registerServiceWorker from './registerServiceWorker';
import { thunk } from 'redux-thunk';

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store = { store }>
        <App />
    </Provider>
);

registerServiceWorker();
