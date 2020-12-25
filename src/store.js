import { createStore } from "redux";
import reducer from './reducer';
import initial from './Initial';

const store = createStore(reducer, initial);

export default store;