import reducer from './reducer';
import initial from './Initial';

import { createStore } from "redux";

const store = createStore(reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;