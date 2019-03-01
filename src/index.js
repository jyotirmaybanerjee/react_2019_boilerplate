import React from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from "./App.js";
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Route path="/:filter?" component={App} />
    </HashRouter>
  </Provider>, 
  document.getElementById('root')
);
