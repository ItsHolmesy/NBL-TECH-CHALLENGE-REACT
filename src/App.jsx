import React from 'react';
import { Route, Switch, Router } from 'wouter';
import Home from './pages/home/home';
import Details from './pages/details/details';
import Header from './components/header';

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/detail/:id" component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

