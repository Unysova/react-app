import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import { store } from './store';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';

const appElement = document.getElementById('root');
const app = (<Router>
    <Provider store={store}>
        <App/>
    </Provider>
</Router>)

ReactDOM.render(app, appElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
