import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { EcommerceRouter } from './ecommerce/router';

import './app.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <EcommerceRouter />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
