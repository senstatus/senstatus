import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import Incidents from './Incidents'

const Routes = () => {
  return (
    <Switch>
      <Route path="/incidents"><Incidents /></Route>
    </Switch>
  );
}

export default Routes;