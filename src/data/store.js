import reducer from './reducer';
import initial from './Initial';

import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initial,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;