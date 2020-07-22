import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import Dashboard from '../../pages/Dashboard';
import Todo from '../../pages/Todo';

import { useAuth } from '../../contexts/authContext'

import './styles.css';
import topImgIcon from '../../assets/logo-rstcom-ok-.png';

export default function AppRoutes(){
        
    const { SignOut, user } = useAuth()

    function handleSignOut(){
         SignOut();
         console.log("working");
    }
    console.log("user Routes");
    return (
        <div className="container" >
        <div className="side-container" >
            <div className="top-side-header">
                <img src={topImgIcon} alt="logo icon rst" />
                    <div id="user-data" >
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                <button id="signout-button" onClick={handleSignOut} >Sair</button>
            </div>
            <ul>
                <li><Link to="/dashboard">Dados Pessoais</Link></li>
                <li><Link to="/todo">TodoList</Link></li> 
            </ul>
        </div>
        <Switch>
            <Route path='/dashboard'>
                 <Dashboard />
            </Route>
            <Route path='/todo' >
                 <Todo />
            </Route>
            <Redirect from="/" to="/dashboard" />
        </Switch>
        </div>
    )
}