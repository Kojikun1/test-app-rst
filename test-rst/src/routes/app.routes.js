import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from './../pages/Dashboard';
import Todo from './../pages/Todo';

export default function AppRoutes(){
    console.log("user Routes");
    return (
        <Switch>
            <Route path='/dashboard'>
                 <Dashboard />
            </Route>
            <Route path='/todo' >
                 <Todo />
            </Route>
            <Redirect from="/" to="/dashboard" />
        </Switch>
    )
}