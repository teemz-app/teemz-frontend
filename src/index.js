import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';

import store from './data/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store= { store }>
    <App 
        onIncrement = { () => store.dispatch({ type: "INC_TEAM" }) }
        onDecrement = { () => store.dispatch({ type: "DEC_TEAM" }) }
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
