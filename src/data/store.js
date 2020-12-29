import reducer from './reducer';
import initial from './Initial';

import { createStore, compose } from "redux";

import thunk from "redux-thunk";

const store = createStore(reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose,
    composeEnhancer()
);

export default store;