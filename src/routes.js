import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MoviesDashboard from './components/movesDashboard/movesList';

export default (
    <div>
        <Switch>
            <Route exact path='/' component={ MoviesDashboard } ></Route>
        </Switch>
    </div>
)