import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Register from '../../pages/Register';
import Login from '../../pages/Login';


export default function AuthRoutes(){

    console.log("auth Routes");
    return (
        <Switch>
            <Route path='/' exact >
                 <Register />
            </Route>
            <Route path='/login' >
                 <Login />
            </Route>
            <Redirect to='/' />
        </Switch>
    )
}