import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import CoinList from './components/coinList/coinList';

export default (
    <div>
        <Switch>
            <Route exact path='/' component={ Dashboard } ></Route>
            <Route path='/coins' component={ CoinList } ></Route>
        </Switch>
    </div>
)