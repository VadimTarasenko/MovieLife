import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Main, Film } from 'pages';

const Root = () => (
  <Switch>
    <Route path="/main" component={Main} />
    <Route path="/film" component={Film} />
  </Switch>
)

export default Root;