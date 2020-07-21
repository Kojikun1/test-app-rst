import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

export default function Todo(){
    return (
        <div  className="container" >
            <h1>Todo List</h1>
            <Link to="/dashboard">To DashBoard</Link>
        </div>
    )
}