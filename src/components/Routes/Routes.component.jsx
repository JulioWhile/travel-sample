import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Checklist from '../../pages/Checklist';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/checklist" component={Checklist} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default Routes;
