import React from 'react';
import './App.css';

import { HashRouter, Switch, Route } from "react-router-dom";
import SmartLogUser from './view/SmartLogUser';
import ListProjectsSmart from './view/ListProjectsSmart';
import ListUsersSmart from './view/ListUsersSmart';
import FilterProjectsSmart from './view/FilterProjectsSmart';


const App = () => (
  <div className="App">
    <HashRouter>
      <Switch>
        <Route exact={true} component={SmartLogUser} path="/" />
        <Route exact={true} component={ListUsersSmart} path="/users" />
        <Route exact={true} component={ListProjectsSmart} path="/projects" />
        <Route exact={true} component={FilterProjectsSmart} path="/filtered-projects" />
      </Switch>
    </HashRouter>
  </div>
);


export default App;
