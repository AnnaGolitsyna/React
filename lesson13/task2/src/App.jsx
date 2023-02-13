import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Products from './Products';

const App = () => {
  return (
    <div className="page">
      <ul className="navigation">
        <li className="navigation__item">
          <a href="/">Home</a>
        </li>
        <li className="navigation__item">
          <a href="/products">Products</a>
        </li>
      </ul>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {' '}
            <Home />
          </Route>
          <Route path="/products" component={Products} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
