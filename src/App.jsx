import React from 'react';
import { Route, Switch, Router } from 'wouter';
import Home from './pages/home/home';
import Details from './pages/details/details';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/detail/:id" component={Details} />
      </Switch>
    </Router>
  );
}

export default App;

