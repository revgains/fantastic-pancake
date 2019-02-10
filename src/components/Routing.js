import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Cabins from './Cabins';
import Contact from './Contact';
import NotFound from './NotFound';
import Pricing from './Pricing';
import Activities from './Activities';

const Routing = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cabins" exact component={Cabins} />
      <Route path="/activities" exact component={Activities} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/pricing" exact component={Pricing} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routing;
