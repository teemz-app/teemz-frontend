import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from "redux";

// import { Provider } from 'react-redux';

// import store from './store';

const initial = {
  team_score: 0,
};

let reducer = (state, action) => {
  switch (action.type) {
      case "INC_TEAM": return {
          ...state,
          team_score: state.team_score + 1
      };

      case "DEC_TEAM": return {
          ...state,
          team_score: state.team_score - 1
      };

      default: return state;
  }
};

const store = createStore(reducer, initial);

let render = () => {
  let state = store.getState();

  ReactDOM.render(
    <React.StrictMode>
      <App 
        team_score = { state.team_score }
        onIncrement = { () => store.dispatch({ type: "INC_TEAM" }) }
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
