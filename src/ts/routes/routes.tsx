import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import RoutePath from './path';
import * as Containers from '../containers';

const Routes = (
  <Switch>
    <Route path={RoutePath.DRUM} component={Containers.Drum} />
    <Route path={RoutePath.NIGHT} component={Containers.Night} />
  </Switch>
);

export default Routes;
