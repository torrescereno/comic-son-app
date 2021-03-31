import React from 'react';
import { Body } from "./ecommerce/atoms/Body"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { EcommerceRouter } from './ecommerce/router';

import "./App.css";

function App() {
  return (
    <Body>
      <Router>
        <Switch>
          <Route path="/">
            <EcommerceRouter />
          </Route>
        </Switch>
      </Router>
    </Body>
  );
}

export default App;
