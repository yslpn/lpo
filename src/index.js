import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './pages/Main'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
