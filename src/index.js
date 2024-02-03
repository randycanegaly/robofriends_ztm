import React from 'react';
// import ReactDOM from 'react-dom'; The new way to import createRoot:
import { createRoot } from "react-dom/client";
import './index.css';
import App from './containers/App';
import 'tachyons';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { searchRobots } from './reducers';
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(searchRobots);


const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store = { store }>
        <App />
    </Provider>
);


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
