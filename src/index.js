import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from 'react-redux';
import { createStore,applyMiddleware,compose } from 'redux';
import App from './components/App';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
);
//npm install --save react-router-dom
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.querySelector('#root')
);
//npm install redux-form --legacy-peer-deps
//799002344694-9rnkrst0kcq8pmg42orq59ea11735m5p.apps.googleusercontent.com

// for another api folder
// started another terminal , created new folder api in streams folder , enter into api folder , run command npm init
// then hit enter on all questions with default answers
// it creates package.json file to install json server
// install json server command npm install --save json-server
// cat db.json prints the streams created

//how to manually delete or edit data in json server

// cd .. , main directory
// open api folder
// edit or delete streams in db.json directly
