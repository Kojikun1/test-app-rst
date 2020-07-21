import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

import AuthContext from '../../contexts/authContext';

export default function Dashboard(){
    
    const { SignOut } = useContext(AuthContext);

    function handleSignOut(){
         SignOut();
         console.log("working");
    }

    return (
        <div className='container' >
            <h1>Dashboard</h1>
            <Link to="/todo">To Todo</Link>
            <button onClick={handleSignOut} >Sair</button>
        </div>
    )
}